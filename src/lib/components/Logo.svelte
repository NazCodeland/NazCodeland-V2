<script lang="ts">
	let logoText: string = 'NazCodeland';

	const logoTextArray = [...logoText];
</script>

<!-- TODO: this should not be an H1 -->
<span class="mb-0 flex-shrink-0 items-center rounded-sm text-center" aria-labelledby="logo">
	{#each logoTextArray as letter}
		{#if letter === 'N'}
			<a
				href="/"
				class="relative mr-[2px] inline-block cursor-pointer rounded-sm px-[0.05rem] text-center
				font-logoFirstL text-logoFirstL font-bold leading-logoFirstL
				tracking-[clamp(0.15rem,_calc(-0.07rem_+_0.36vw),_0.5rem)] text-logoFirstLClr
				shadow-logo outline outline-primaryColor transition-transform duration-200
				hover:-translate-y-5 hover:rotate-[20deg] hover:scale-[2] hover:uppercase
				focus-visible:outline-[canvasText]"
				id="logo"
				aria-label="NazCodeland">
				{letter}
			</a>
		{:else}
			<span
				class="inline-block cursor-default px-[0.05rem] font-logoNotFirstL
				text-logoNotFirstL
				tracking-[clamp(0.15rem,_calc(-0.07rem_+_0.36vw),_0.5rem)]
				shadow-logo transition-transform duration-200 hover:-translate-y-5
				hover:rotate-[20deg] hover:scale-[2] hover:uppercase dark:outline
				dark:outline-[0.1px] dark:outline-slate-50/20">
				{letter}
			</span>
		{/if}
	{/each}
</span>

<style lang="">
</style>
