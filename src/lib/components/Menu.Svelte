<script>
	import ThemePalettes from './Menu/ThemePalettes.svelte';
</script>

<nav class="menu">
	<ul class="menu__links">
		<li><a href="/" autofocus>Home</a></li>
		<li><a href="/about">About Me</a></li>
		<li><a href="/portfolio" />Portfolio</li>
		<li><a href="/viewResume">Resume</a></li>
		<li>
			<ul class="nested-menu">
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

	.menu {
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
	}

	.menu__links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: var(--spacer-fluid-16-32);

		inline-size: 100%;
		block-size: 0;

		padding-inline: var(--spacer-fluid-16-40);

		/* unable to transition when using clamp for block-size */
		/* transition: block-size 1s, padding-block 1s; */
	}

	.open .menu__links {
		/* able to transition if I use 4rem alone */
		block-size: clamp(1rem, 50%, 4rem);
		padding-block: 0.5rem;
	}

	/* NOTE: is this needed? */
	/* .menu__links li {
		position: relative;
	} */

	.menu__links a {
		white-space: nowrap;
		color: rgba(var(--nav-link-text-color));
		outline: none;
	}

	.menu__links li a:is(:hover, :focus)::before {
		inline-size: 100%;
		inset-inline-start: 0;
	}

	.menu__links li a::before {
		content: '';
		position: absolute;
		inset-inline-start: 50%;
		inset-block-end: 0;

		inline-size: 0;
		block-size: 2px;
		background-color: rgba(var(--primary-color));
		transition: inline-size 0.3s, left 0.3s;
	}

	.nested-menu {
		display: none;
	}

	@media (min-width: 53rem) {
		.menu {
			all: unset;
		}

		.menu__links {
			display: flex;
			flex-wrap: nowrap;
			gap: var(--spacer-fluid-16-32);

			block-size: initial;
			padding-inline: 0;

			/* visibility: visible; */
		}
	}
</style>
