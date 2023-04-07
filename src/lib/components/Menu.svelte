<script lang="ts">
	import Link from '$lib/elements/Link.svelte';
	import { menuStore } from '$lib/stores/menuStore';
	const titles = ['/Home', '/#About Me', 'Portfolio', 'Resume', '/#Contact', 'Blog'];
	export let bgColor: string = 'bg-secondaryColor';
</script>

<!-- prettier-ignore -->
<nav
	class="mx-16-40  absolute md:relative md:inset-x-0 inset-x-menuInline md:top-0 top-menuBlock md:z-0 
	-z-20 md:mt-0 mt-2 md:border-none border-b border-solid border-primaryColor {bgColor}
	md:p-0 px-4 pt-10 pb-2 text-primaryColor group-data-[themePalette=main]:text-bodyCopy">
	<ul
		class="flex flex-wrap justify-center gap-16-32 
		{$menuStore ? 'inline-block' : 'hidden'} md:flex">

		<!-- prettier-ignore -->
		{#each titles as title}
		<li>
			<a href={title === 'Contact' 
				? 'mailto:Nazcodeland@gmail.com' 
				: `${title.replace('Home', '').replace(' ', '').toLowerCase()}`} 
			
			class="relative outline-0 before:absolute before:left-[50%] before:bottom-0
				before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300
				before:content-[''] hover:before:left-0 hover:before:w-full focus:before:left-0
				focus:before:w-full group-data-[themePalette=main]:contrast-more:before:bg-[activeText]">
				{title.replace('/', '').replace('#', '')}</a>
		</li>
		{/each}

</nav>

<style>
</style>
