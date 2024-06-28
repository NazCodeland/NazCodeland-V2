<script lang="ts">
	import { navStore } from '$src/lib/stores/navStore';
	import { showContactLinks } from '$lib/stores/contactLinksStore';
	export let bgColor = 'bg-secondaryColor';
</script>

<nav
	class="absolute inset-x-menuInline top-menuBlock -z-20 mx-4 mt-2 outline
	outline-secondaryColor md:relative md:inset-x-0 md:top-0 md:z-0 md:mt-0
	{bgColor} px-4 pb-2 pt-10 text-primaryColor
	group-data-[themePalette=main]:text-bodyCopy md:p-0">
	<ul
		class="flex justify-center gap-16-32
		{$navStore ? 'inline-block' : 'hidden'} md:flex">
		<li><a class="navLink" href="/">Home</a></li>
		<li class="whitespace-nowrap">
			<a class="navLink" href="/#aboutMe">About Me</a>
		</li>
		<li><a class="navLink" href="/portfolio">Portfolio</a></li>
		<li><a class="navLink" href="/resume">Resume</a></li>
		<li>
			<a on:click={showContactLinks} class="navLink" href="/#contact">
				Contact</a>
		</li>
		<li><a class="navLink" href="/blog">Blog</a></li>
	</ul>
</nav>

<style lang="postcss">
	.navLink {
		position: relative;
		outline-width: 0;
	}
	.navLink::before {
		content: '';
		position: absolute;
		inset-inline-start: 50%;
		inset-block-end: 0;
		block-size: 2px;
		inline-size: 0;
		background-color: theme(colors.primaryColor);
		transition-property: all;
		transition-delay: 0s;
		transition-duration: 300ms;
	}
	.navLink:hover::before,
	.navLink:focus::before {
		inset-inline-start: 0;
		inline-size: 100%;
	}
</style>
