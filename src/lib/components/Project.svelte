<script lang="ts">
	export let imageName: string = 'one.jpg';
	export let project: string;
	export let roles: string;
	export let tools: string;
	export let duration: string;
	export let inlineSize: string = '600px';
	export let blockSize: string = '400px';
	export let objectFit: string = 'cover';
</script>

<figure
	class="group/project relative overflow-hidden rounded-2xl border border-slate-300 p-1 dark:border-slate-600">
	<a href="/portfolio/{project}">
		<img
			loading="lazy"
			style="inline-size: {inlineSize}; block-size:{blockSize}; object-fit:{objectFit}"
			class="rounded-xl transition-[transform] delay-[0s] duration-200 hover:scale-[1.15]"
			src="/images/{imageName}"
			alt="a cute dog" />
	</a>
	<figcaption class="text-sm">
		<span
			class="absolute top-3 ml-2 mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy outline outline-1 outline-current">
			<i>Project:</i>
			{project}
		</span>
		<span
			class="absolute bottom-[68px] ml-2 mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[@media(hover:hover)]:-left-[100%] [@media(hover:hover)]:transition-[left] [@media(hover:hover)]:delay-[0s] [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover/project:left-2">
			<i>Roles:</i>
			{roles}
		</span>
		<span
			class="absolute bottom-10 ml-2 mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[@media(hover:hover)]:-left-[100%] [@media(hover:hover)]:transition-[left] [@media(hover:hover)]:delay-200 [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover/project:left-2">
			<i>Tools:</i>
			{tools}
		</span>
		<span
			class="absolute bottom-3 ml-2 mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[@media(hover:hover)]:-left-[100%] [@media(hover:hover)]:transition-[left] [@media(hover:hover)]:delay-300 [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover/project:left-2">
			<i>Duration:</i>
			{duration}
		</span>
	</figcaption>
</figure>

<style>
</style>
