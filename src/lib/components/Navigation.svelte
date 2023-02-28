<header class="site-wide-header">
	<a href="#maincontent" class="skipToMain">Skip to main content</a>

	<div class="theme-switcher-and-logo">
		<!-- TODO: navigation touches logo -->
		<!-- TODO: add an icon for low/high contrast https://www.shutterstock.com/search/automatic-contrast-icon -->

		<h1 class="logo" aria-labelledby="logo">NazCodeland</h1>
	</div>

	<div class="menu-and-filter">
		<!-- TODO: the styles for this menu need to be adjusted -->
		<!-- this needs to be done so that in mobile viewpoints, when the menu is minimized the navigation still shows up in landmarks -->
		<button type="button" tabindex="0" class="hamburger" aria-label="menu">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.5 4.5C0.5 4.08578 0.835785 3.75 1.25 3.75H22.75C23.1642 3.75 23.5 4.08578 23.5 4.5C23.5 4.91422 23.1642 5.25 22.75 5.25H1.25C0.835785 5.25 0.5 4.91422 0.5 4.5ZM0.5 12C0.5 11.5858 0.835785 11.25 1.25 11.25H22.75C23.1642 11.25 23.5 11.5858 23.5 12C23.5 12.4142 23.1642 12.75 22.75 12.75H1.25C0.835785 12.75 0.5 12.4142 0.5 12ZM1.25 18.75C0.835785 18.75 0.5 19.0858 0.5 19.5C0.5 19.9142 0.835785 20.25 1.25 20.25H22.75C23.1642 20.25 23.5 19.9142 23.5 19.5C23.5 19.0858 23.1642 18.75 22.75 18.75H1.25Z"
					fill="currentColor"
				/>
			</svg>
		</button>
	</div>

	<nav class="menu">
		<ul class="menu__links">
			<li><a href="/" autofocus>Home</a></li>
			<li><a href="/about">About Me</a></li>
			<li><a href="/portfolio">Portfolio</a></li>
			<li>
				<a href="/viewResume">Resume</a>
				<ul class="nested-menu">
					<li><a href="/design">UX/UI Design</a></li>
					<li><a href="/development">Web Development</a></li>
				</ul>
			</li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>

<style>
	.theme-switcher-and-logo,
	.menu {
		display: flex;
		align-items: center;
		gap: var(--spacer-fluid-16-32-24x);
	}

	.menu-and-filter {
		display: flex;
		gap: var(--spacer-8);
	}

	.hamburger {
		display: grid;
		place-items: center;

		min-inline-size: 28px;
		min-block-size: 28px;
		border: none;
		background-color: transparent;
	}

	/* this setting is set in reset.css but in More Contrast in firefox this is needed again */
	.hamburger:focus {
		outline-offset: 0;
		outline-width: 0.1rem;
		outline-style: solid;
		outline-color: canvasText;

		border-radius: var(--spacer-4);
	}

	.hamburger:is(:focus-visible) {
		outline-style: dashed;
	}

	.menu {
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
		align-items: start;
		gap: var(--spacer-fluid-16-32);

		inline-size: 100%;
		block-size: 0;

		padding-inline: var(--spacer-fluid-16-40);

		visibility: hidden;

		/* unable to transition when using clamp for block-size */
		/* transition: block-size 1s, padding-block 1s; */
	}

	.open .menu__links {
		/* able to transition if I use 4rem alone */
		block-size: clamp(1rem, 50%, 4rem);
		padding-block: 0.5rem;
		visibility: visible;
	}

	.menu__links li {
		position: relative;
	}

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

			visibility: visible;
		}

		.hamburger {
			display: none;
		}
	}
</style>
