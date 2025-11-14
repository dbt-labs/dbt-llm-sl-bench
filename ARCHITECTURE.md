# Architecture Overview

## Component Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Entry Points                              │
│  bench_new.py (simplified) │ bench.py (original, backward compat)│
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Runners Layer                               │
│  • BenchmarkRunner (orchestrates benchmark execution)            │
│  • run_single_benchmark() - Single config                        │
│  • run_matrix_benchmark() - Multiple configs, parallel support   │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Configuration Layer                            │
│  • ConfigurationManager (creates services)                       │
│  • BaseConfig (shared settings)                                  │
│  • SemanticLayerConfig, MCPConfig, SQLConfig                    │
└──────────┬────────────────────┬────────────────────┬────────────┘
           │                    │                    │
           ▼                    ▼                    ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   Services       │  │   Factories      │  │   Storage        │
│  • Database      │  │  • SQLAnswer     │  │  • save_sql_     │
│  • Query Gen     │  │    Factory       │  │    answer()      │
│  • Comparison    │  │                  │  │  • DuckDB ops    │
│  • Visualization │  └──────────────────┘  └──────────────────┘
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────────┐
│                      Executors Layer                              │
│  • AIExecutor (pydantic-ai integration)                           │
│  • MCPServerConfig (MCP server setup)                             │
│  • execute_prompt() (unified interface)                           │
└──────────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────────┐
│                    External Services                              │
│  • OpenAI API                                                     │
│  • Anthropic API                                                  │
│  • dbt Semantic Layer                                             │
│  • MCP Servers                                                    │
└──────────────────────────────────────────────────────────────────┘
```

## Data Flow

```
1. Configuration
   BaseConfig → Strategy-specific Config → ConfigurationManager

2. Service Creation
   ConfigurationManager → BenchmarkServices (container)

3. Query Generation
   Challenge → QueryRequest → QueryStrategy → QueryGenerationResult

4. Execution
   QueryGenerationResult → DatabaseService → DatabaseExecutionResult

5. Comparison
   Gold DataFrame + Result DataFrame → ComparisonService → ComparisonResult

6. Answer Creation
   QueryGenerationResult → SQLAnswerFactory → SQLAnswer

7. Storage
   SQLAnswer → save_sql_answer() → DuckDB

8. Results
   List[SQLAnswer] + Results DataFrame → Visualization
```

## Strategy Pattern for Query Generation

```
                    QueryStrategy (ABC)
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
SemanticLayerQuery    MCPQuery          SQLQuery
   Strategy           Strategy          Strategy
        │                  │                  │
        └──────────────────┴──────────────────┘
                           │
                           ▼
              QueryGenerationService
                  (manages all strategies)
```

## Dependency Flow

```
High Level (User-facing)
    ↓
Runners (Orchestration)
    ↓
Services (Business Logic)
    ↓
Executors (AI Execution)
    ↓
Models (Data Structures)
    ↓
Low Level (Storage, Utilities)
```

## Test Structure

```
tests/
├── conftest.py (shared fixtures)
├── unit/
│   ├── test_config.py       → tests src/config/
│   ├── test_models.py       → tests src/models/
│   ├── test_comparison.py   → tests src/services/comparison.py
│   ├── test_visualization.py → tests src/services/visualization.py
│   ├── test_factories.py    → tests src/factories/
│   └── test_storage.py      → tests src/storage/
└── integration/
    └── test_end_to_end.py   → tests complete workflows
```

## Module Dependencies

### Core Dependencies (Low-Level)
- **exceptions/** - No dependencies
- **models/** - No dependencies (except pandas for DataFrame)
- **config/base.py** - Depends on: models, exceptions

### Mid-Level Dependencies
- **config/strategies.py** - Depends on: config/base
- **config/manager.py** - Depends on: config/base, config/strategies
- **factories/** - Depends on: config, models
- **storage/** - Depends on: models

### High-Level Dependencies
- **executors/** - Depends on: config, models
- **services/** - Depends on: config, models, executors (for query_generation)
- **utils/** - Depends on: config, models, services
- **runners/** - Depends on: config, models, services, factories, storage

## Key Design Patterns

### 1. Strategy Pattern
**Location:** `src/services/query_generation.py`
**Purpose:** Different query generation strategies (Semantic Layer, MCP, SQL)

### 2. Factory Pattern
**Location:** `src/factories/answer_factory.py`, `src/config/manager.py`
**Purpose:** Creating objects with consistent configuration

### 3. Service Pattern
**Location:** `src/services/`
**Purpose:** Organizing business logic by domain

### 4. Dependency Injection
**Location:** Throughout, especially in `BenchmarkRunner`
**Purpose:** Making components testable and loosely coupled

### 5. Dataclass Pattern
**Location:** `src/models/`
**Purpose:** Structured, type-safe data containers

## Extension Points

### Adding a New Query Strategy
1. Create strategy class in `src/services/query_generation.py`
2. Implement `QueryStrategy.generate_query()`
3. Register in `QueryGenerationService._strategies`
4. Add config class in `src/config/strategies.py`
5. Add tests

### Adding a New Model
1. Add enum value to `src/config/base.py::ModelName`
2. Update `src/executors/prompt_executor.py::get_pydantic_ai_model_name()`
3. Test with existing strategies

### Adding New Metrics
1. Extend `SQLAnswer` dataclass in `src/models/answers.py`
2. Update storage in `src/storage/database.py`
3. Update visualization in `src/services/visualization.py`

## Error Handling Strategy

```
Low-Level Errors
    ↓
Wrapped in Result Objects (DatabaseExecutionResult, QueryGenerationResult)
    ↓
Checked by Services
    ↓
Logged and Stored in SQLAnswer
    ↓
Retry Logic (BenchmarkRunner._generate_query_with_retry)
    ↓
Final Result (Success/Failure captured in results DataFrame)
```

## Testing Strategy

### Unit Tests
- Test individual functions/methods in isolation
- Use mocks for external dependencies
- Fast execution (<1ms per test)
- Cover edge cases and error conditions

### Integration Tests
- Test multiple components together
- Minimal mocking
- Verify end-to-end workflows
- Use test fixtures for setup

### Test Fixtures (conftest.py)
- Configurations
- Sample data (DataFrames)
- Mock responses
- Temporary files/databases

## Performance Considerations

### Parallel Execution
**Location:** `src/runners/benchmark.py::run_matrix_benchmark()`
- Uses ThreadPoolExecutor
- Configurable max_workers
- Thread-safe database operations (retry logic)

### Retry Logic
**Location:** `src/runners/benchmark.py::_generate_query_with_retry()`
- Exponential backoff
- Configurable max retries
- Handles transient failures

### Database Concurrency
**Location:** `src/storage/database.py::save_sql_answer()`
- Retry logic for lock conflicts
- Random jitter to avoid thundering herd

## Security Considerations

1. **API Keys:** Read from environment variables
2. **Database:** Local DuckDB file, no network exposure
3. **SQL Injection:** Parameterized queries where applicable
4. **Input Validation:** Type hints and dataclass validation

## Monitoring & Observability

- **Token Usage:** Tracked in `QueryResult.usage`
- **Timing:** Tracked in `SQLAnswer.timing`
- **Success Rates:** Captured in results DataFrame
- **Errors:** Stored in `SQLAnswer.error` and `comparison_error`
- **Iterations:** Tracked for statistical analysis
