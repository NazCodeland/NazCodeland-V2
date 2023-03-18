<script>
	import Link from '../elements/Link.svelte';
	import { menuStore } from '$lib/stores/menuStore';
	const pages = [
		'Home',
		'About Me',
		'Portfolio',
		'UX/UI Design',
		'Web Development',
		'Resume',
		'Contract',
		'Blog'
	];
</script>

<!-- prettier-ignore -->
<nav
	class="absolute md:relative md:inset-x-0 inset-x-menuInline md:top-0 top-menuBlock md:z-0 
	-z-20 md:mt-0 mt-2 md:border-none border-b border-solid border-primaryColor bg-secondaryColor
	md:p-0 px-4 pt-10 pb-1 text-primaryColor group-data-[themePalette=main]:text-bodyCopy">
	<ul
		class="flex flex-wrap justify-center gap-16-32 
		{$menuStore ? 'inline-block' : 'hidden'} md:flex">

		<Link href={'/'} page={'Home'}/>
		<Link href={'/About Me'} page={'About Me'}/>
		<Link href={'/Portfolio'} page={'Portfolio'}>
			<ul class="hidden">
				<Link href={'/UX/UI Design'} page={'UX/UI Design'}/>
				<Link href={'/Web Development'} page={'Web Development'}/>
			</ul>
		</Link>
		<Link href={'/Resume'} page={'Resume'}/>
		<Link href={'/Contract'} page={'Contract'}/>
		<Link href={'/Blog'} page={'Blog'}/>

		<!-- how to do this better? -->
		<!-- {#each pages as page}
			{#if page !== 'UX/UI Design' && page !== 'Web Development'}
				<Link href={'/{pageName}'} {page}>
					{#each pages as page}
						{#if page === 'UX/UI Design'}
							<ul class="hidden">
								<Link href={'/{pageName}'} {page}/>
								{#each pages as page}
									{#if page === 'Web Development'}
									<Link href={'/{pageName}'} {page}/>
									{/if}
								{/each}
							</ul>
						{/if}			
					{/each}
				</Link>
			{/if}
		{/each} -->
		
	</ul>
</nav>

<style>
</style>
