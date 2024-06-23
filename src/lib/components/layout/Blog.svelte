<script>
	import Default from './Default.svelte';

	export let title;
</script>

<Default {title}>
	<slot />
</Default>
