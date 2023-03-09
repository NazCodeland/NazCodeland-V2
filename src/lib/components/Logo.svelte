<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let logo: HTMLElement;
	let logoText: string = 'NazCodeland';

	function spanLogo(logoText: string) {
		const logoTextArray = [...logoText];
		return logoTextArray.map((letter) => {
			return letter === 'N'
				? `<a href="/" class="
				relative 
				font-logoFirstL 
				text-logoFirstL
				font-bold 
				leading-logoFirstL 
				cursor-pointer 
				rounded-sm 
				text-primaryColor 
				"

        id="logo" aria-label="NazCodeland">${letter}</a>`
				: `<span class="font-logoNotFirstL text-logoNotFirstL leading-logoNotFistL cursor-default text-slate-900" >${letter}</span>`;
		});
	}

	let spannedLogo = spanLogo(logoText);
	spannedLogo = [
		`${spannedLogo.slice(0, 1)}<span aria-hidden="true">${spannedLogo.slice(1).join('')}</span>`
	];

	onMount(() => {
		logo.innerHTML = spannedLogo[0];
	});
</script>

<h1 class="flex-shrink-0 logo rounded-sm" bind:this={logo} aria-labelledby="logo">NazCodeland</h1>

<style>
	.logo {
		white-space: nowrap;
	}

	.logo .first-letter {
		position: relative;

		font-family: var(--ff-logo-first-letter);
		font-size: var(--fs-logo-first-letter);
		line-height: clamp(48px, calc(31.36px + 5.22vw), 96px);
		cursor: pointer;
		border-radius: var(--spacer-2);
		color: rgba(var(--primary-color));
	}

	.logo * {
	}

	.logo *:is(:hover) {
		text-transform: uppercase;
		transform: translateY(-20px) scale(2) rotate(20deg);
	}

	.logo .first-letter:is(:focus-visible) {
		outline-color: canvasText;
	}

	.logo > span :nth-child(1) {
		margin-inline-start: 0.1rem;
	}
	.logo > span,
	.logo > span:hover {
		all: unset;
	}

	[color-scheme='dark'] .logo :not([aria-hidden]) {
		--logo-box-shadow: none;
		outline-color: rgba(255, 255, 255, 0.2);
	}
	[color-scheme='dark'] .logo .first-letter:focus-visible {
		outline-color: canvasText;
	}
</style>
