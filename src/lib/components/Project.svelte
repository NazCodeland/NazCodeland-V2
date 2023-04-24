<script lang="ts">
	export let imageName: string = 'nazCodeland.png';
	export let project: string;
	export let roles: string;
	export let tools: string;
	export let duration: string;
	export let inlineSize: string = '270';
	export let blockSize: string = '520';
	export let objectFit: string = 'cover';
	export let objectPosition: string = 'top';

	let showDesktop: boolean;

	function switchImage() {
		setTimeout(() => {
			if (showDesktop) {
				imageName = 'nazCodeland.png';
			} else {
				imageName = 'nazCodelandMobile.png';
			}
		}, 450);
	}

	function handleClick() {
		showDesktop = !showDesktop;
		switchImage();
	}
</script>

<figure
	style="max-inline-size: {inlineSize}px; block-size: {blockSize}px;"
	class="three-d-container group/project relative overflow-hidden rounded-2xl border border-slate-600 p-1 transition-all duration-200">
	<a
		href="/portfolio/{project}"
		class="three-d-item {showDesktop
			? '[--rotateY:180deg] [--translateX:-74px] [--translateZ:-60px]'
			: ''} transition-all duration-1400">
		<img
			loading="lazy"
			style="inline-size: {inlineSize}px; block-size: {blockSize}px; object-fit:{objectFit}; object-position:{objectPosition};"
			class="rounded-xl transition-[transform] delay-[0s] duration-200 hover:scale-[1.15]"
			src="/images/{imageName}"
			alt="a cute dog" />
		<span
			class="{showDesktop
				? 'rotate-180'
				: ''} projectT-title absolute top-7 ml-4 mr-3 transform rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy outline outline-1 outline-current">
			<i>Project:</i>
			{project}
		</span>
	</a>
	<figcaption class="text-sm">
		<!-- <span
			class="absolute top-3 ml-2 mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy outline outline-1 outline-current">
			<i>Project:</i>
			{project}
		</span> -->
		<span
			class="absolute bottom-[68px] mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[@media(hover:hover)]:-left-[150%] [@media(hover:hover)]:transition-[left] [@media(hover:hover)]:delay-[0s] [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover/project:left-2">
			<i>Roles:</i>
			{roles}
		</span>
		<span
			class="absolute bottom-10 mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[@media(hover:hover)]:-left-[150%] [@media(hover:hover)]:transition-[left] [@media(hover:hover)]:delay-200 [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover/project:left-2">
			<i>Tools:</i>
			{tools}
		</span>
		<span
			class="absolute bottom-3 mr-3 rounded-md bg-secondaryColor/85 py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[@media(hover:hover)]:-left-[150%] [@media(hover:hover)]:transition-[left] [@media(hover:hover)]:delay-300 [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover/project:left-2">
			<i>Duration:</i>
			{duration}
		</span>
	</figcaption>
</figure>
<div>
	<button on:click={handleClick} class="rounded-md border px-4 py-1">
		View {showDesktop ? 'mobile' : 'desktop'} version</button>
</div>

<style>
	:root {
		--rotateY: 0deg;
		--translateZ: 60px;
		--translateX: 0px;
	}

	.three-d-container {
		display: grid;
		perspective: 800px;
		transform-style: preserve-3d;
	}

	.three-d-item {
		transform: rotateY(var(--rotateY));
		transform-style: preserve-3d;
	}

	.projectT-title {
		transition-delay: 0.45s;
		transform: translateZ(var(--translateZ)) rotateY(var(--rotateY)) translateX(var(--translateX));
	}
</style>
