<script>
</script>

<article class="flex w-full flex-wrap items-center justify-center gap-16-40">
	<img
		class="imageSize imageBorderW rounded-full border-solid border-grey-1 shadow-rest dark:border-grey-600"
		src="/images/someImage.jpeg"
		width="320"
		height="320"
		alt="of Nazar" />

	<div class="flex flex-col gap-y-4">
		<h2 class="selection:bg-green-700">
			Nazar K. I.
			<br />
			<!-- using 'display: block' on the below small elements class, 
            causes an undesirable pause in the NVDA screen reader. '<br> does not.'-->
			<small class="text-fluid-4 font-normal text-muted">Frontend Developer</small>
		</h2>

		<p class="max-w-[60ch]">
			Hey👋 <br />welcome to my little spot on the web. I made this website to showcase my skill
			set, through my <a href="/portfolio" class="link outline-none">Portfolio</a>, to potential
			employers. It's also a place for me to <a href="/blog" class="link outline-none">Blog</a> about
			what I am learning and to reference it in the future.
		</p>

		<footer class="mt-2 flex flex-wrap gap-4 [@media(width<=380px)]:flex-col">
			<a
				class="btn btn-filled-primary  flex-grow transition-[flex-grow] delay-[0s] duration-[4s] [@media(width>=28rem)]:flex-grow-0 "
				href="/portfolio">View Portfolio</a>
			<a
				class="btn btn-outlined-primary self-center [@media(width<=380px)]:min-w-[12rem]"
				href="/resume">View Resume</a>
		</footer>
	</div>
</article>

<style lang="postcss">
	.imageSize {
		@apply h-[clamp(9.38rem,_calc(6.34rem_+_15.18vw),_20rem)] 
		w-[clamp(9.375rem,_calc(6.34rem_+_15.18vw),_20rem)];
	}

	.imageBorderW {
		@apply border-[clamp(0.5rem,_calc(0.43rem_+_0.36vw),_0.75rem)];
	}
</style>
