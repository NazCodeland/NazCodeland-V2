<script lang="ts">
	// export let image: string = 'https://picsum.photos/200/300';
	export let href: string;
	export let title: string;
	export let createdAt: string;
	export let timeToRead: string;
	export let views: string | number;

	export let description: string;
	export let tags: string[];
</script>

<a
	href="/blog/{href}"
	class="
	forcedClrAdjust flex flex-auto basis-[30ch] flex-col
	gap-4 rounded-lg
	p-4 shadow-rest
	transition-transform delay-[0s] duration-[0.15s]
	ease-in-out
	hover:scale-[1.01]
	hover:cursor-pointer
	hover:shadow-hover
	active:scale-active
	active:shadow-active
	group-data-[themePalette=main]:outline-0
	group-data-[themePalette=main]:focus-visible:outline-2
	dark:bg-slate-1/12
	dark:outline dark:outline-primaryColor dark:hover:bg-slate-50/20
	dark:focus-visible:outline-dashed dark:active:bg-slate-50/12 dark:[&:is(:hover,:focus-visible)]:outline-[canvasText]">
	<!-- <img class="img" src={image} alt="a cute dog" /> -->
	<div class="">
		<h2 class="dark:opacity-[85%]">{title}</h2>
		<div class="text-fluid-4 dark:opacity-45">
			<span>{createdAt}</span>
			<span>{timeToRead}</span>
			<span>{views}</span>
		</div>
	</div>

	<p class="max-w-[80ch] dark:opacity-[70%]">{description}</p>

	<div class="mt-auto flex gap-2 text-sm">
		{#each tags as tag}
			<a class="btn" href="/">{tag}</a>
		{/each}
	</div>
</a>
