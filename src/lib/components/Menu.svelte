<script>
	import Link from '../elements/Link.svelte';
	import { menuStore } from '$lib/stores/menuStore';
	// const pages = [
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

		<Link href={'/'} page={'Home'}/>
		<Link href={'/about'} page={'About Me'}/>
		<Link href={'/portfolio'} page={'Portfolio'}>
			<ul class="hidden">
				<Link href={'/webDesign'} page={'UX/UI Design'}/>
				<Link href={'/webDevelopment'} page={'Web Development'}/>
			</ul>
		</Link>
		<Link href={'/resume'} page={'Resume'}/>
		<Link href={'/contact'} page={'Contact'}/>
		<Link href={'/blog'} page={'Blog'}/>
	</ul>
</nav>

<style>
</style>
