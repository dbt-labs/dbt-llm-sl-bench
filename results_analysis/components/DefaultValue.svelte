<script>
	import { getInputContext } from '@evidence-dev/sdk/utils/svelte';

	export let name;
	export let value;

	const inputs = getInputContext();

	if (!($inputs[name]?.rawValues?.length > 0)) {
		$inputs[name] = {
			label: '',
			value: value,
			rawValues: []
		};
	}
</script>
