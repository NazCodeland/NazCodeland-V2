<script lang="ts">
	export let imageName: string = '1.jpg';
	export let project: string;
	export let roles: string;
	export let tools: string;
	export let duration: string;
	export let inlineSize: string = '600px';
	export let blockSize: string = '400px';
	export let objectFit: string = 'cover';
</script>

<figure
	class="relative overflow-hidden rounded-2xl border border-slate-300 p-1 dark:border-slate-600">
	<a href="/">
		<img
			style="inline-size: {inlineSize}; block-size:{blockSize}; object-fit:{objectFit}"
			class="rounded-xl transition-[transform] delay-[0s] duration-200 hover:scale-[1.15]"
			src="/images/{imageName}"
			alt="a cute dog" />
	</a>
	<figcaption class="ml-2 text-sm">
		<span class="absolute top-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy">
			<i>Project:</i>
			{project}
		</span>
		<span class="absolute bottom-[68px] rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy">
			<i>Roles:</i>
			{roles}
		</span>
		<span class="absolute bottom-10 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy">
			<i>Tools:</i>
			{tools}
		</span>
		<span class="absolute bottom-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy">
			<i>Duration:</i>
			{duration}
		</span>
	</figcaption>
</figure>

<style>
</style>
