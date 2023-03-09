<script>
	import ThemePalettes from './colorSchemeToggle/ThemePalettes.svelte';
	import { menuStore } from '$lib/stores/menuStore';
	import { ThemePalettesStore, toggleThemePalettesStore } from '$lib/stores/themePaletteStore';

	function handleClick() {}
</script>

<!-- 
	inset-inline: 
	calc(clamp(1rem, calc(0.57rem + 2.14vw), 2.5rem) * -1);
inset-block-start: clamp(3rem, calc(1.96rem + 6vw), 6rem); -->

<nav
	class="inset-x-menuInline top-menuBlock -z-10 bg-mainBackground mt-2 pt-10 pb-1 border-b border-solid border-primaryColor absolute">
	<ul
		class="flex flex-wrap gap-16-32 px-16-40 justify-center 
		{$menuStore ? 'inline-block' : 'hidden'}">
		<li><a href="/">Home</a></li>
		<li class="flex-shrink-0"><a href="/about">About Me</a></li>
		<li><a href="/portfolio">Portfolio</a></li>
		<li><a href="/viewResume">Resume</a></li>
		<li class="hidden">
			<ul>
				<li><a href="/design">UX/UI Design</a></li>
				<li><a href="/development">Web Development</a></li>
			</ul>
		</li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/blog">Blog</a></li>
	</ul>
</nav>

<style>
</style>
