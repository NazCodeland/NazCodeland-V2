<script>
	import { menuStore } from '$lib/stores/menuStore';
</script>

<!-- prettier-ignore -->
<nav
	class="absolute inset-x-menuInline top-menuBlock -z-20 mt-2 border-b border-solid border-primaryColor bg-site px-4 pt-10 pb-1 text-primaryColor group-data-[themePalette=main]:text-[canvasText] md:[all:unset]">
	<ul
		class="flex flex-wrap justify-center gap-16-32 
		{$menuStore ? 'inline-block' : 'hidden'} md:flex">
		<li><a href="/" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Home</a></li>
		<li><a href="/about" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			About Me</a></li>
		<li><a href="/portfolio" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Portfolio</a></li>
		<li><a href="/viewResume" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Resume</a></li>
		<li class="hidden">
			<ul>
				<li>
					<a href="/design" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
						UX/UI Design</a></li>
				<li><a href="/development" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
					Web Development</a></li>
			</ul>
		</li>
		<li><a href="/contact" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Contact</a></li>
		<li> <a href="/blog" class="before:transition-[w, left] efore:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Blog</a></li>
	</ul>
</nav>

<style>
</style>
