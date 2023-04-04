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

<figure class="relative overflow-hidden rounded-xl">
	<a href="/">
		<img
			style="inline-size: {inlineSize}; block-size:{blockSize}; object-fit:{objectFit}"
			class="rounded-xl transition-[transform] delay-[0s] duration-200 hover:scale-[1.15]"
			src="/images/{imageName}"
			alt="a cute dog" />
	</a>
</figure>

<style>
</style>
