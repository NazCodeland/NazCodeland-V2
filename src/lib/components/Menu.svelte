<script>
	import { menuStore } from '$lib/stores/menuStore';
</script>

<nav
	class="md:[all:unset] inset-x-menuInline top-menuBlock -z-10 bg-mainBackground mt-2 pt-10 pb-1 border-b border-solid border-primaryColor absolute">
	<ul
		class="flex flex-wrap gap-16-32  justify-center 
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
