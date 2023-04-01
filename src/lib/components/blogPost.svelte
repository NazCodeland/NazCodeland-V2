<script lang="ts">
	// export let image: string = 'https://picsum.photos/200/300';
	export let href: string;
	export let title: string;
	export let description: string;
	export let published: string;
	export let updated: string = '';
	export let tags: string[];
	import Giscus from 'C:/Users/o0/source/projects/mine/myApp/node_modules/@giscus/svelte/package/Giscus.svelte';
</script>

<Giscus
	id="comments"
	repo="NazCodeland/NazCodeland-V2"
	repoId="R_kgDOJDWq2A"
	category="Announcements"
	categoryId="DIC_kwDOJDWq2M4CVdOM"
	mapping="pathname"
	strict="1"
	reactionsEnabled="1"
	emitMetadata="0"
	inputPosition="bottom"
	theme="dark_dimmed"
	lang="en"
	loading="lazy" />
