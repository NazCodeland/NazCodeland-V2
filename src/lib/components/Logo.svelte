<script lang="ts">
	let logoText: string = 'NazCodeland';

	const logoTextArray = [...logoText];
</script>

<!-- TODO: this should not be an H1 -->
<h1 class="logo flex-shrink-0 rounded-sm " aria-labelledby="logo">
	{#each logoTextArray as letter}
		{#if letter === 'N'}
			<!-- prettier-ignore -->
			<a href="/" class="relative font-logoFirstL text-logoFirstL font-bold leading-logoFirstL cursor-pointer rounded-sm text-primaryColor mr-[1px]" id="logo" aria-label="NazCodeland">
			{letter}
		</a>
		{:else}
			<span
				class="text-logo flex cursor-default font-logoNotFirstL text-logoNotFirstL leading-logoNotFistL">
				{letter}
			</span>
		{/if}
	{/each}
</h1>

<style lang="postcss">
	/* this component contains some styles in logo.css */
	.logo *:not([aria-hidden='true']) {
		@apply inline-block
		px-[0.05rem]
		tracking-[clamp(0.15rem,_calc(-0.07rem_+_0.36vw),_0.5rem)]

		shadow-logo
		transition-transform
		duration-200;
	}

	.logo *:not([aria-hidden='true']):hover {
		@apply -translate-y-5
		rotate-[20deg]
		scale-[2]
		uppercase;
	}

	.logo > span :nth-child(1) {
		@apply ml-[0.1rem];
	}

	[color-scheme='dark'] .logo *:not([aria-hidden='true']) {
		@apply shadow-none
		outline
		outline-[0.1px]
		outline-slate-50/20;
	}
</style>
