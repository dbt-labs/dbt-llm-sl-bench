<script>
	import '@evidence-dev/tailwind/fonts.css';
	import '../app.css';
	import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
	export let data;
</script>

<EvidenceDefaultLayout {data} builtWithEvidence={false} maxWidth="1280px" hideTOC={false}>
	<slot slot="content" />
</EvidenceDefaultLayout>
