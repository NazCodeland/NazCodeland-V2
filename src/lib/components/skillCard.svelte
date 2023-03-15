<script lang="ts">
	export let title: string;
</script>

<a
	href="/"
	class="flex-auto basis-[30ch] p-4 shadow-rest outline outline-primaryColor transition-transform delay-[0s] duration-[0.15s]
	ease-in-out hover:scale-[1.01] hover:cursor-pointer hover:shadow-hover 
	active:scale-active active:shadow-active group-data-[themepalette=main]:outline-none dark:bg-slate-50/12 dark:hover:bg-slate-50/20 dark:active:bg-slate-50/12">
	<header data-theme="warning" class="mb-8-16 flex items-end gap-4">
		<slot name="icon" />
		<h3 class="mb-0">
			<span>{title}</span>
		</h3>
	</header>

	<p class="skill-card__copy">
		<slot />
	</p>
</a>

<style>
</style>
