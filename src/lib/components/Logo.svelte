<script lang="ts">
	import { onMount } from 'svelte';

	let logo: HTMLElement;
	let logoText: string = 'NazCodeland';

	function spanLogo(logoText: string) {
		const logoTextArray = [...logoText];
		return logoTextArray.map((letter) => {
			return letter === 'N'
				? `<a href="/" class="relative font-logoFirstL text-logoFirstL font-bold leading-logoFirstL cursor-pointer rounded-sm text-primaryColor" id="logo" aria-label="NazCodeland">
					${letter}
					</a>`
				: `<span class="font-logoNotFirstL text-logoNotFirstL leading-logoNotFistL cursor-default">
					${letter}
					</span>`;
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

<h1 class="logo flex-shrink-0 rounded-sm" bind:this={logo} aria-labelledby="logo">NazCodeland</h1>

<style>
	/* this component contains some styles in logo.css */
</style>
