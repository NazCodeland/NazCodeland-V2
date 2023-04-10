<script>
	import Icon from './Icon.svelte';
</script>

<ul class="group/contact flex h-0 content-center items-center justify-center gap-3">
	<li
		class="mail grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38
		transition-all duration-300 hover:scale-[2] [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="mailto:nazcodeland@gmail.com" rel="noopener">
			<Icon iconName="mail" />
		</a>
	</li>
	<li
		class=" discord grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38
		transition-all duration-300 hover:scale-[2] [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="https://discordapp.com/users/804118317299400734">
			<Icon iconName="discord" />
		</a>
	</li>
	<li
		class="github grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38
	transition-all duration-300 hover:scale-[2] [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="https://github.com/NazCodeland?tab=repositories" target="_blank">
			<Icon iconName="github" />
		</a>
	</li>
</ul>

<style lang="postcss">
</style>
