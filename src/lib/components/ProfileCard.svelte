<script>
	import Link from '../elements/InlineLink.svelte';
</script>

<article class="flex w-full flex-wrap items-center justify-center gap-16-40">
	<img
		class="forcedClrAdjust h-[clamp(9.38rem,_calc(6.34rem_+_15.18vw),_20rem)] w-[clamp(9.375rem,_calc(6.34rem_+_15.18vw),_20rem)] rounded-full border-[clamp(0.5rem,_calc(0.43rem_+_0.36vw),_0.75rem)] border-solid
		border-transparent shadow-rest dark:border-slate-50/12"
		src="/images/someImage.jpeg"
		width="320"
		height="320"
		alt="of Nazar" />

	<div class="flex flex-col gap-y-4">
		<h2 class="forcedClrAdjust leading-7 selection:bg-green-700">
			Nazar K. I.
			<br />
			<!-- using 'display: block' on the below small elements class, 
            causes an undesirable pause in the NVDA screen reader. '<br> does not.'-->
			<small class="text-fluid-4 font-normal opacity-70">Frontend Developer</small>
		</h2>

		<p class="max-w-[60ch]">
			Hey👋 <br />welcome to my little spot on the web. I made this website to showcase my skill
			set, through my
			<Link href="/portfolio" title="Portfolio" />, to potential employers. It's also a place for me
			to
			<Link href="/blog" title="Blog" />
			about what I am learning and to reference it in the future.
		</p>

		<footer class="mt-2">
			<ul class="flex flex-wrap gap-2 [@media(width>=328px)]:gap-4">
				<li
					class="btn btn-filled-primary flex-grow transition-[flex-grow,transform] delay-[0s] duration-[4s,0.15s] [@media(width>900px)]:flex-grow-0">
					<a href="/portfolio">View Portfolio</a>
				</li>
				<li class="btn btn-outlined-primary"><a href="/resume">View Resume</a></li>
			</ul>
		</footer>
	</div>
</article>

<style>
</style>
