<script lang="ts">
	export let title: string;
</script>

<a
	href="/"
	class="flex-auto basis-[30ch] bg-grey-1/6 p-4 shadow-rest outline outline-primaryColor transition-transform delay-[0s]
	duration-[0.15s] ease-in-out hover:scale-[1.01] hover:cursor-pointer 
	hover:bg-grey-1/20 hover:shadow-hover active:scale-active active:bg-grey-1/6 active:shadow-active group-data-[themepalette=main]:outline-none">
	<header data-theme="warning" class="mb-8-16 flex items-end gap-4 ">
		<slot name="icon" />
		<h3 class="mb-0">
			<span>{title}</span>
		</h3>
	</header>

	<p class="skill-card__copy">
		<slot />
	</p>
</a>

<style>
</style>
