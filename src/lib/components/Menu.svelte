<script>
	import { menuStore } from '$lib/stores/menuStore';
</script>

<nav
	class="absolute inset-x-menuInline top-menuBlock -z-20 mt-2 border-b border-solid border-primaryColor bg-site px-4 pt-10 pb-1 text-primaryColor group-data-[themePalette=main]:text-[canvasText] md:[all:unset]">
	<ul
		class="flex flex-wrap justify-center gap-16-32 
		{$menuStore ? 'inline-block' : 'hidden'} md:flex">
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
