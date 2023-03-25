<!-- Need to render all the blog posts in the folder here -->

<script>
	export let data;
</script>

<ul>
	{#each data.posts as post}
		{post}
		<!-- <li>
			<a rel="prefetch" href="blog/{path}">{title}</a> - {date}
		</li> -->
	{/each}
</ul>
