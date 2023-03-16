<script lang="ts">
	export let title: string;
</script>

<a
	href="/"
	class="forcedClrAdjust flex-auto basis-[30ch] rounded-lg p-4 shadow-rest transition-transform  
	delay-[0s] duration-[0.15s] ease-in-out hover:scale-[1.01] hover:cursor-pointer
	hover:shadow-hover active:scale-active 
	active:shadow-active
	group-data-[themePalette=main]:outline-2
	group-data-[themePalette=main]:hover:outline-2
	contrast-more:!outline-[activeText]
	contrast-more:hover:!outline-[canvasText]
	contrast-more:focus-visible:!outline-[canvasText]
	dark:bg-slate-50/12 
	dark:outline 
	dark:outline-primaryColor
	dark:hover:bg-slate-50/20
	dark:focus-visible:outline-dashed
	dark:active:bg-slate-50/12
	dark:[&:is(:hover,:focus-visible)]:outline-[canvasText]
	">
	<header data-theme="warning" class="mb-8-16 flex items-end gap-4">
		<slot name="icon" />
		<h3 class="forcedClrAdjust mb-0">
			{title}
		</h3>
	</header>

	<p class="contrast-more:!text-[canvasText]">
		<slot />
	</p>
</a>

<style lang="postcss">
</style>
