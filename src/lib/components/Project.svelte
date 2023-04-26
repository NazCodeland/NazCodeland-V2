<script lang="ts">
	export let imageName: string;
	export let project: string;
	export let roles: string;
	export let tools: string;
	export let duration: string;
	export let inlineSize: string = '280';
	export let blockSize: string = '500';
	export let objectFit: string = 'cover';
	export let objectPosition: string = 'top left';

	let originX: number = 1;
	let originY: number = 50;

	// $: console.log('x', originX);
	// $: console.log('y', originY);

	let showDesktop: boolean;
	let inset: string;
	let desktopWidth: string;

	function switchImage() {
		setTimeout(
			() => {
				if (showDesktop) {
					imageName = `${imageName.replace('Mobile', '')}`;
				} else {
					imageName = `${imageName}Mobile`;
				}
			},
			showDesktop ? 415 : 450
		);
	}
	function switchInset() {
		setTimeout(() => {
			if (showDesktop) {
				inset = 'right-0';
			} else {
				inset = 'left-0';
			}
		}, 500);
	}
	function setDesktopWidth() {
		setTimeout(
			() => {
				if (showDesktop) {
					desktopWidth = 'w-full';
				} else {
					desktopWidth = '';
				}
			},
			showDesktop ? 427 : 460
		);
	}

	function scrollIntoView({ target }) {
		const figureParent = target.parentNode;
		setTimeout(() => {
			figureParent.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 500);
	}

	function handleClick(event) {
		scrollIntoView(event);
		showDesktop = !showDesktop;
		switchImage();
		switchInset();
		setDesktopWidth();
	}

	function handleMousemove(event: MouseEvent) {
		console.log(event.offsetX);
		console.log(event.offsetY);
	}
</script>

<div
	class="flex flex-col gap-4 border {desktopWidth} scrollMarginTop max-w-[620px] transition-all [--scrollMarginTop:160px]">
	<figure
		style="min-inline-size: {showDesktop ? inlineSize : inlineSize}px; block-size: {showDesktop
			? Number(blockSize) - 60
			: blockSize}px;"
		class="three-d-container group/project relative transition-all duration-200">
		<div
			class="{showDesktop
				? '[--rotateY:180deg] [--translateZ:-60px] [direction:rtl]'
				: ''} three-d-item anchor h-full w-full transition-all duration-1400">
			<a href="/portfolio/{project}" class="">
				<img
					on:mousemove={handleMousemove}
					loading="lazy"
					style="transform-origin: {originX}% {originY}%;  object-fit:{objectFit}; object-position:{objectPosition};"
					class="{showDesktop ? 'hover:scale-[1.15]' : ''} 
								rounded-lg transition-all [padding-inline-end:4px]"
					src="/images/{imageName}.png"
					alt="a cute dog" />
			</a>
			<span
				class="{inset} project-info pointer-events-none absolute ml-4 mr-11 {showDesktop
					? 'top-8'
					: 'top-6'} rounded-md bg-secondaryColor py-0.5 px-2 text-sm text-bodyCopy outline outline-1 outline-current">
				Project:
				{project}
			</span>
		</div>

		<figcaption
			class="{showDesktop
				? '[--rotateY:180deg] [--translateZ:-60px] [--scrollbarSize:0]'
				: ''} three-d-item-two pointer-events-none text-sm transition-all duration-1400">
			<span
				class="{inset} project-info absolute bottom-[78px] mr-10 ml-4 rounded-md bg-secondaryColor py-0.5 px-2
			text-bodyCopy outline outline-1
			outline-current [--insetDelay:0s] [@media(hover:hover)]:-left-[150%] [@media(hover:hover)]:group-hover/project:left-2">
				Roles:
				{roles}
			</span>
			<span
				class="{inset} project-info absolute bottom-[50px] mr-10 ml-4 rounded-md bg-secondaryColor py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[--insetDelay:0.2s] [@media(hover:hover)]:-left-[150%] [@media(hover:hover)]:group-hover/project:left-2">
				Tools:
				{tools}
			</span>
			<span
				class="{inset} project-info absolute bottom-[22px] mr-10 ml-4 rounded-md bg-secondaryColor py-0.5 px-2 text-bodyCopy
			outline outline-1 outline-current
			[--insetDelay:0.3s] [@media(hover:hover)]:-left-[150%] [@media(hover:hover)]:group-hover/project:left-2">
				Duration:
				{duration}
			</span>
		</figcaption>
	</figure>

	<button on:click={handleClick} class=" m-auto rounded-md border px-4 py-1">
		View {showDesktop ? 'mobile' : 'desktop'} design</button>
</div>

<style>
	:root {
		--rotateY: 0deg;
		--translateZ: 60px;
		--insetDelay: ;
	}

	.three-d-container {
		perspective: 800px;
	}

	.three-d-item {
		transform: rotateY(var(--rotateY));
		transform-style: preserve-3d;
	}

	.three-d-item :nth-child(1) {
		position: absolute;
		inset: 0;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.three-d-item-two {
		transform: rotateY(var(--rotateY));
		transform-style: preserve-3d;
	}

	.three-d-item-two * {
		position: absolute;
	}

	.project-info {
		transition: transform 0s 0.45s, inset 0.2s var(--insetDelay);
		transform: translateZ(var(--translateZ)) rotateY(var(--rotateY));
	}

	/* scrollbar */
	::-webkit-scrollbar {
		inline-size: 4px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(var(--primary, 90, 102, 110));
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(var(--tertiary));
		border: none;
	}
</style>
