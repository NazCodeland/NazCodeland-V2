<script>
	import { menuStore } from '$lib/stores/menuStore';
</script>

<!-- prettier-ignore -->
<nav
	class="absolute md:relative md:inset-x-0 inset-x-menuInline md:top-0 top-menuBlock md:z-0 -z-20 md:mt-0 mt-2 md:border-none border-b border-solid border-primaryColor bg-secondaryColor md:p-0 px-4 pt-10 pb-1 text-primaryColor group-data-[themePalette=main]:text-[canvasText]">
	<ul
		class="flex flex-wrap justify-center gap-16-32 
		{$menuStore ? 'inline-block' : 'hidden'} md:flex">
		<li><a href="/" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Home</a></li>
		<li><a href="/about" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			About Me</a></li>
		<li><a href="/portfolio" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Portfolio</a></li>
		<li><a href="/viewResume" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Resume</a></li>
		<li class="hidden">
			<ul>
				<li>
					<a href="/design" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
						UX/UI Design</a></li>
				<li><a href="/development" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
					Web Development</a></li>
			</ul>
		</li>
		<li><a href="/contact" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Contact</a></li>
		<li> <a href="/blog" class="outline-none before:transition-[w, left] before:content-[''] relative before:absolute before:left-[50%] before:bottom-0 before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300 hover:before:left-0 hover:before:w-full focus:before:left-0 focus:before:w-full">
			Blog</a></li>
	</ul>
</nav>

<style>
</style>
