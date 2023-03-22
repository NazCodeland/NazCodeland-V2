<script>
	import BlogPost from '$lib/components/blogPost.svelte';
	export let data;
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<section>
	<h1 class="mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)] font-bold">Blog</h1>

	<!-- <div class="flex flex-col gap-16"> -->
	<!-- not sure if this should be included in its current form -->
	<!-- <ol class="titleLayout mb-20 list-decimal">
			{#each data.posts as post}
				<Link href="/" title={post.title} />
			{/each}
		</ol> -->

	<div class="gridLayout gap-8">
		{#each data.posts as post, i}
			<BlogPost
				href={post.title.toLowerCase().replaceAll(' ', '-')}
				title={post.title}
				createdAt={post.createdAt}
				views={post.views}
				timeToRead={post.timeToRead}
				description={post.description}
				tags={post.tags} />
		{/each}
	</div>
	<!-- </div> -->
</section>

<style>
	.gridLayout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
	}
</style>
