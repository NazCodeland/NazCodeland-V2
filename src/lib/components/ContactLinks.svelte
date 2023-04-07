<script>
	import Icon from './Icon.svelte';
</script>

<ul class="flex h-fit content-center items-center justify-center gap-3">
	<li class="grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38">
		<a href="https://github.com/NazCodeland?tab=repositories" target="_blank">
			<Icon iconName="github" />
		</a>
	</li>
	<li class="grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38">
		<a href="mailto:nazcodeland@gmail.com" rel="noopener">
			<Icon iconName="mail" />
		</a>
	</li>
	<li class="grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38">
		<a href="https://discordapp.com/users/804118317299400734">
			<Icon iconName="discord" />
		</a>
	</li>
</ul>

<style lang="postcss">
</style>
