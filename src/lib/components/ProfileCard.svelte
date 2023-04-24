<script>
	import Link from '$lib/elements/InlineLink.svelte';
	import ContactLinks from '$lib/components/ContactLinks.svelte';
</script>

<article class=" flex w-full flex-wrap items-center justify-center gap-16-40">
	<img
		class=" forcedClrAdjust filter-[grayscale(100%)] h-[clamp(9.38rem,_calc(6.34rem_+_15.18vw),_20rem)] w-[clamp(9.375rem,_calc(6.34rem_+_15.18vw),_20rem)] rounded-full border-2 border-solid border-transparent
		object-cover object-top shadow-rest dark:border-slate-50/12"
		src="/images/self.jpg"
		width="320"
		height="320"
		alt="of Nazar"
		loading="lazy" />

	<div class="relative flex flex-grow flex-col gap-y-4 sm:w-[40ch]">
		<h2 class="forcedClrAdjust leading-5 selection:bg-green-700 tablet:leading-6 sm:leading-7">
			Nazar K. I.
			<br />
			<!-- using 'display: block' on the below small elements class, 
            causes an undesirable pause in the NVDA screen reader. '<br> does not.'-->
			<small class="text-fluid-4 font-normal opacity-70">Front-end Developer</small>
		</h2>

		<div class="absolute right-0 se:top-[5%] tablet:top-[6%]">
			<ContactLinks />
		</div>

		<p class="max-w-[60ch]">
			Hey👋 <br />Welcome to my personal corner of the web. I've created this website with the aim
			of presenting my skill set to potential employers, which is showcased through my
			<Link href="/portfolio" title="Portfolio" />. It also serves as a place for me to share my
			ongoing learning through my
			<Link href="/blog" title="Blog" />
		</p>

		<footer class="mt-2">
			<ul class="flex flex-wrap gap-2 [@media(width>=328px)]:gap-4">
				<li
					class="btn btn-filled-primary flex-grow-[10] transition-[flex-grow,transform] delay-[0s] duration-[4s,0.15s] [@media(width>900px)]:flex-grow-0">
					<a href="/portfolio">View Portfolio</a>
				</li>
				<li class="btn btn-outlined-primary flex-grow tablet:flex-grow-0">
					<a href="/resume">View Resume</a>
				</li>
			</ul>
		</footer>
	</div>
</article>

<style>
</style>
