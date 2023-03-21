<script lang="ts">
	export let title: string;
</script>

<a
	href="/"
	class="skillCard forcedClrAdjust flex-auto basis-[30ch] rounded-lg p-4  
	shadow-rest transition-transform delay-[0s] duration-[0.15s] ease-in-out
	hover:scale-[1.01] hover:cursor-pointer 
	hover:shadow-hover active:scale-active active:shadow-active
	group-data-[themePalette=main]:outline-0
	group-data-[themePalette=main]:focus-visible:outline-2
	dark:bg-slate-1/12 
	dark:outline 
	dark:outline-primaryColor
	dark:hover:bg-slate-50/20
	dark:focus-visible:outline-dashed
	dark:active:bg-slate-50/12
	dark:[&:is(:hover,:focus-visible)]:outline-[canvasText]
	">
	<header data-theme="warning" class="mb-8-16 flex items-end gap-4">
		<slot name="icon" />
		<h3 class="mb-0 contrast-more:!text-[canvasText]">
			{title}
		</h3>
	</header>

	<p class="contrast-more:!text-[canvasText]">
		<slot />
	</p>
</a>

<style lang="postcss">
</style>
