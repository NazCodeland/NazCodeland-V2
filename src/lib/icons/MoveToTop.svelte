<script>
	import Icon from '$lib/components/Icon.svelte';
</script>

<!-- TODO: how can I prevent this component from going into the footer area -->
<div
	class="fixed right-[45%] bottom-[6vh] z-10 rounded-full border border-primaryColor bg-secondaryColor shadow-rest hover:shadow-hover active:shadow-active">
	<a
		tabindex="0"
		class="grid h-[40px] w-[40px] place-items-center rounded-full text-3xl text-primaryColor dark:bg-slate-1/12 dark:hover:bg-slate-50/20 dark:active:bg-slate-1/12"
		href="#mainContent">
		<Icon iconName="ChevronLineUp" />
	</a>
</div>

<style>
</style>
