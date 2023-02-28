<script lang="ts">
	/* eslint-disable import/extensions */
	import { onMount } from 'svelte';
	import { wait, removeUnusedClasses } from '../utilities/index';

	onMount(async () => {
		const monitor = document.querySelector('.monitor');
		const monitorBody = document.querySelector('.monitor-body');
		const monitorLeg = document.querySelector('.monitor-leg');

		const languageIcon = document.querySelector('.language-icon');

		const languageIcons = [
			'vsc.svg',
			'html.svg',
			'css.svg',
			'tailwind.svg',
			'javascript.svg',
			'git.svg',
			'github.svg',
			'nodejs.svg',
			'expressjs.svg',
			'python.svg',
			'svelte.svg'
		];

		async function rotateIcons(icons: string[]) {
			for (let icon = 0; languageIcons.length > 0; icon += 1) {
				if (icon === languageIcons.length) {
					icon = 0;
				}

				languageIcon.href.baseVal = `/images/icons/${languageIcons[icon]}`;

				removeUnusedClasses(monitor, monitor.classList.value);
				removeUnusedClasses(monitorBody, monitorBody.classList.value);
				removeUnusedClasses(monitorLeg, monitorLeg.classList.value);

				switch (languageIcons[icon]) {
					case 'vsc.svg':
						monitor.classList.add('vsc-svg-all-fill');
						monitorBody.classList.add('vsc-svg-all-fill');
						monitorLeg.classList.add('vsc-svg-all-fill');
						break;

					case 'html.svg':
						monitor.classList.add('html-svg-monitor-fill');
						break;

					case 'css.svg':
						monitor.classList.add('css-svg-monitor-fill');
						break;

					case 'tailwind.svg':
						monitor.classList.add('tailwind-svg-monitor-fill');
						break;

					case 'javascript.svg':
						monitor.classList.add('javascript-svg-monitor-fill');
						break;

					case 'git.svg':
						monitor.classList.add('git-svg-all-fill');
						monitorBody.classList.add('git-svg-all-fill');
						monitorLeg.classList.add('git-svg-all-fill');
						break;

					case 'github.svg':
						monitor.classList.add('github-svg-all-fill');
						monitorBody.classList.add('github-svg-all-fill');
						monitorLeg.classList.add('github-svg-all-fill');
						break;

					case 'nodejs.svg':
						monitor.classList.add('nodejs-svg-monitor-fill');
						monitorBody.classList.add('nodejs-svg-all-fill');
						monitorLeg.classList.add('nodejs-svg-all-fill');
						break;

					case 'python.svg':
						monitorBody.classList.add('python-svg-body-fill');
						monitorLeg.classList.add('python-svg-leg-fill');
						break;

					case 'svelte.svg':
						monitor.classList.add('svelte-svg-all-fill');
						monitorBody.classList.add('svelte-svg-all-fill');
						monitorLeg.classList.add('svelte-svg-all-fill');
						break;

					default:
						break;
				}

				// eslint-disable-next-line no-await-in-loop
				await wait(2000);
			}
		}

		if (languageIcon) rotateIcons(languageIcons);
	});
</script>

<a href="http://www.youtube.com" class="skill-card">
	<header class="skill-card__header">
		<h3 class="skill-card__title"><span>Product Research</span></h3>
	</header>
	<div class="skill-card__content">
		<div class="skill-card__body">
			<p class="skill-card__copy">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit nemo praesentium
				corporis blanditiis minima? Quibusdam delectus fugit sit? Hic.
			</p>
		</div>
	</div>
</a>

<style>
	.skill-cards-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.skill-cards-container a {
		flex: 1 1 30ch;
	}

	.skill-card {
		display: inline-block;
		background-color: orange !important;
		padding: var(--spacer-16);

		--bg-opacity: var(--opacity-06-dark);
		background-color: rgba(var(--grey-000), var(--bg-opacity));

		box-shadow: var(--box-shadow-rest);
		transition: ease-in-out transform 0.15s;
	}

	.skill-card:is(:hover, :focus) {
		--bg-opacity: var(--opacity-20-dark);
		cursor: pointer;
		box-shadow: var(--box-shadow-hover);
		transform: scale(1.01);
	}

	.skill-card:active {
		--bg-opacity: var(--opacity-06-dark);
		box-shadow: var(--box-shadow-active);
		transform: var(--scale-active);
	}

	.skill-card__header {
		display: flex;
		gap: 1rem;
		align-items: flex-end;
		margin-block-end: var(--spacer-fluid-8-16);
	}

	.skill-card__content {
		display: flex;
		flex-direction: column;
		gap: var(--spacer-fluid-8-16);
	}
	.skill-card__title {
		margin-block-end: 0;
	}

	/* ------------------------------------------------- */
	/* svg fill styles */
	.vsc-svg-all-fill {
		fill: rgba(60, 153, 212, 1);
	}

	.html-svg-monitor-fill {
		fill: rgba(228, 77, 38, 1);
	}

	.css-svg-monitor-fill {
		fill: rgba(38, 77, 228, 1);
	}

	.tailwind-svg-monitor-fill {
		fill: rgba(6, 182, 212, 1);
	}

	.javascript-svg-monitor-fill {
		fill: rgba(240, 219, 79, 1);
	}

	.git-svg-all-fill {
		fill: rgba(240, 80, 51, 1);
	}

	.github-svg-all-fill {
		fill: rgba(22, 22, 20, 1);
	}

	.nodejs-svg-monitor-fill {
		fill: rgba(104, 160, 99, 1);
	}
	.nodejs-svg-all-fill {
		fill: rgba(51, 51, 51, 1);
	}

	.python-svg-body-fill {
		fill: rgba(55, 162, 210, 1);
	}
	.python-svg-leg-fill {
		fill: rgba(238, 227, 63, 1);
	}

	.svelte-svg-all-fill {
		fill: rgba(255, 62, 0, 1);
	}
</style>
