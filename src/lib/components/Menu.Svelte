<script>
	import ThemePalettes from './Menu/ThemePalettes.svelte';
</script>

<nav>
	<ul class="hidden">
		<li><a href="/" autofocus>Home</a></li>
		<li><a href="/about">About Me</a></li>
		<li><a href="/portfolio" />Portfolio</li>
		<li><a href="/viewResume">Resume</a></li>
		<li>
			<ul class="hidden">
				<li><a href="/design">UX/UI Design</a></li>
				<li><a href="/development">Web Development</a></li>
			</ul>
		</li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/blog">Blog</a></li>
		<li class="lastItem"><ThemePalettes /></li>
	</ul>
</nav>

<style>
	.lastItem {
		position: absolute;
		inset-inline-start: 29px;
		inset-block-start: 9px;
	}

	/* .menu {
		display: flex;
		align-items: center;
		gap: var(--spacer-fluid-16-32-24x);
		position: absolute;
		inset-inline: calc(clamp(1rem, calc(0.57rem + 2.14vw), 2.5rem) * -1);
		inset-block-start: clamp(3rem, calc(1.96rem + 6vw), 6rem);

		padding-block-start: var(--spacer-8);

		border-block-end: 1px solid;
		border-color: rgba(var(--primary-color));

		background-color: rgba(var(--main-background));
		overflow: hidden;

		z-index: -1;
	} */

	/* @media (min-width: 53rem) {
		.menu {
			all: unset;
		}

		.menu__links {
			display: flex;
			flex-wrap: nowrap;
			gap: var(--spacer-fluid-16-32);

			block-size: initial;
			padding-inline: 0;

			visibility: visible;
		}
	} */
</style>
