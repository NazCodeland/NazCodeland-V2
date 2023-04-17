<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import viewport from '$src/lib/actions/lazyLoadingAction';

	export let iconName: string = '';
	export let classes: string = '';

	let icon: typeof SvelteComponent;

	$: if (iconName) {
		(async () => {
			try {
				const module = await import(`../icons/${iconName}.svg`);
				icon = module.default;
			} catch (error) {
				const module = await import(`../icons/${iconName}.svelte`);
				icon = module.default;
			}

			return icon;
		})();
	}
</script>

{#if icon}
	<svelte:component this={icon} class={classes} />
{/if}
