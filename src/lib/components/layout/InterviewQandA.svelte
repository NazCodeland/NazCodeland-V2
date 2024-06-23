<script lang="ts">
	export let title = 'Title';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1>{title}</h1>
	<slot />
</main>
