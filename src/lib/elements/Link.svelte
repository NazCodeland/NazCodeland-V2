<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a
	{href}
	class="relative z-10 inline-block outline-0 delay-[0] before:absolute before:bottom-0 before:h-0.5
	before:w-full before:bg-primaryColor before:transition-[h] before:duration-200 before:content-['']
	hover:text-[canvas] hover:before:-z-10 hover:before:h-full
	hover:before:bg-primaryColor focus-visible:text-[markText] focus-visible:before:-z-10
	focus-visible:before:h-full focus-visible:before:bg-primaryColor
	contrast-more:text-[canvasText]
	group-data-[themePalette=main]:contrast-more:before:bg-[activeText]
	group-data-[themePalette=main]:contrast-more:before:hover:bg-[activeText]">
	{title}</a>
<slot />

<style>
</style>
