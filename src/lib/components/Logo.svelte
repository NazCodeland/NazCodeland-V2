<script lang="ts">
	let logoText = 'NazCodeland';
	const logoTextArray = [...logoText];
</script>

<span
	class="mb-0 flex-shrink-0 select-none items-center rounded-sm text-center"
	aria-labelledby="logo">
	{#each logoTextArray as letter}
		{#if letter === 'N'}
			<a href="/" class="firstLetter" id="logo" aria-label="NazCodeland">
				{letter}
			</a>
		{:else}
			<span
				class="restOfLetters dark:outline dark:outline-[0.1px] dark:outline-slate-50/20">
				{letter}
			</span>
		{/if}
	{/each}
</span>

<style lang="">
	.firstLetter,
	.restOfLetters {
		display: inline-block;
		box-shadow: var(--box-shadow-logo);
		padding-inline: 0.05rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}

	.firstLetter {
		color: rgba(var(--primary-color));
		padding-inline: 2px;
		padding-right: 3px;
		margin-inline-end: 2px;
		border-radius: 0.125rem;
		text-align: center;
		font-size: clamp(24px, calc(17.12px + 2.14vw), 3rem);
		font-family: 'Suez one', Georgia, 'Times New Roman', Times, serif;
		font-weight: 700;
		line-height: clamp(48px, calc(31.36px + 5.22vw), 96px);
		outline: solid rgba(var(--primary-color));
	}

	.restOfLetters {
		font-family: 'Suez one', system-ui, Arial, sans-serif;
		font-size: clamp(1.375rem, calc(0.75rem + 1.94vw), 2.25rem);
		line-height: clamp(1.5rem, calc(0.98rem + 2.61vw), 3rem);
		letter-spacing: clamp(0.15rem, calc(-0.07rem + 0.36vw), 0.5rem);
		cursor: default;
	}

	.firstLetter:focus-visible {
		outline-color: canvasText;
	}

	.restOfLetters:hover,
	.firstLetter:hover {
		text-transform: uppercase;
		transform: translateY(-1.25rem) rotate(20deg) scale(2);
	}
</style>
