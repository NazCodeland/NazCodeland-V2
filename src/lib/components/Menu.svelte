<script>
	import Link from '../elements/Link.svelte';
	import { menuStore } from '$lib/stores/menuStore';
	// const titles = [
	// 	'Home',
	// 	'About Me',
	// 	'Portfolio',
	// 	'UX/UI Design',
	// 	'Web Development',
	// 	'Resume',
	// 	'Contract',
	// 	'Blog'
	// ];
</script>

<!-- prettier-ignore -->
<nav
	class="absolute md:relative md:inset-x-0 inset-x-menuInline md:top-0 top-menuBlock md:z-0 
	-z-20 md:mt-0 mt-2 md:border-none border-b border-solid border-primaryColor bg-secondaryColor
	md:p-0 px-4 pt-10 pb-1 text-primaryColor group-data-[themePalette=main]:text-bodyCopy">
	<ul
		class="flex flex-wrap justify-center gap-16-32 
		{$menuStore ? 'inline-block' : 'hidden'} md:flex">

		<!-- how can I re-write this in a loop. When I tried, I ended up in a big nested loop -->
		<Link href={'/'} title={'Home'}/>
		<Link href={'/about'} title={'About Me'}/>
		<Link href={'/portfolio'} title={'Portfolio'}>
			<ul class="hidden">
				<Link href={'/webDesign'} title={'UX/UI Design'}/>
				<Link href={'/webDevelopment'} title={'Web Development'}/>
			</ul>
		</Link>
		<Link href={'/resume'} title={'Resume'}/>
		<Link href={'/contact'} title={'Contact'}/>
		<Link href={'/blog'} title={'Blog'}/>
	</ul>
</nav>

<style>
</style>
