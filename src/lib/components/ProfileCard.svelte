<script>
</script>

<article class="flex w-full flex-wrap items-center justify-center gap-16-40">
	<img
		class="forcedClrAdjust h-[clamp(9.38rem,_calc(6.34rem_+_15.18vw),_20rem)] w-[clamp(9.375rem,_calc(6.34rem_+_15.18vw),_20rem)] rounded-full  border-[clamp(0.5rem,_calc(0.43rem_+_0.36vw),_0.75rem)] border-solid
		border-transparent shadow-rest dark:border-slate-50/12"
		src="/images/someImage.jpeg"
		width="320"
		height="320"
		alt="of Nazar" />

	<div class="flex flex-col gap-y-4">
		<h2 class="leading-7 selection:bg-green-700">
			Nazar K. I.
			<br />
			<!-- using 'display: block' on the below small elements class, 
            causes an undesirable pause in the NVDA screen reader. '<br> does not.'-->
			<small class="text-fluid-4 font-normal opacity-[.6]">Frontend Developer</small>
		</h2>

		<p class="max-w-[60ch]">
			Hey👋 <br />welcome to my little spot on the web. I made this website to showcase my skill
			set, through my
			<a
				href="/portfolio"
				class="relative z-10 inline-block outline-0 delay-[0] before:absolute before:bottom-0 before:h-0.5 before:w-full 
				before:bg-primaryColor before:transition-[h] before:duration-200 before:content-[''] hover:text-[markText] 
				hover:before:-z-10 hover:before:h-full hover:before:bg-primaryColor focus-visible:text-[markText] focus-visible:before:-z-10 focus-visible:before:h-full focus-visible:before:bg-primaryColor contrast-more:before:bg-[activeText] contrast-more:hover:text-[canvasText] contrast-more:before:hover:bg-[activeText] contrast-more:focus-visible:text-[canvasText] contrast-more:before:focus-visible:bg-[activeText]"
				>Portfolio</a
			>, to potential employers. It's also a place for me to
			<a
				href="/blog"
				class="relative z-10 inline-block outline-0 delay-[0] before:absolute before:bottom-0 before:h-0.5 before:w-full 
			before:bg-primaryColor before:transition-[h] before:duration-200 before:content-[''] hover:text-[markText] 
			hover:before:-z-10 hover:before:h-full hover:before:bg-primaryColor focus-visible:text-[markText] focus-visible:before:-z-10 focus-visible:before:h-full focus-visible:before:bg-primaryColor contrast-more:before:bg-[activeText] contrast-more:hover:text-[canvasText] contrast-more:before:hover:bg-[activeText] contrast-more:focus-visible:text-[canvasText] contrast-more:before:focus-visible:bg-[activeText]"
				>Blog</a> about what I am learning and to reference it in the future.
		</p>

		<footer class="mt-2 flex flex-wrap gap-2 [@media(width>=328px)]:gap-4">
			<a
				class="btn btn-filled-primary flex-grow transition-[flex-grow,transform] delay-[0s] duration-[4s,0.15s] [@media(width>900px)]:flex-grow-0 "
				href="/portfolio">View Portfolio</a>
			<a class="btn btn-outlined-primary" href="/resume">View Resume</a>
			<a href="/" class="btn">Base</a>
		</footer>
	</div>
</article>

<style>
</style>
