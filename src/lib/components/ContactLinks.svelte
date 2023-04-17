<script>
	import { contactLinksStore } from '$lib/stores/contactLinksStore';
	import Icon from './Icon.svelte';
</script>

<ul
	class="scrollMarginTop group/contact flex h-0 content-center items-center justify-center gap-3 [--scrollMarginTop:400px]"
	id="contact">
	<li
		class="{$contactLinksStore
			? 'contactLinksAnimation [--animationDelay:1ms]'
			: ''} mail grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38 outline outline-transparent
		transition-all duration-500 hover:scale-[2] hover:duration-150 [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="mailto:nazcodeland@gmail.com" rel="noopener">
			<Icon iconName="mail" />
		</a>
	</li>
	<li
		class="{$contactLinksStore
			? 'contactLinksAnimation [--animationDelay:300ms]'
			: ''} discord grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38 outline outline-transparent
		transition-all duration-500 hover:scale-[2] hover:duration-150 [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="https://discordapp.com/users/804118317299400734">
			<Icon iconName="discord" />
		</a>
	</li>
	<li
		class="{$contactLinksStore
			? 'contactLinksAnimation [--animationDelay:600ms]'
			: ''} grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38 outline outline-transparent transition-all duration-500
		hover:scale-[2] hover:duration-150 [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="https://github.com/NazCodeland?tab=repositories" target="_blank">
			<Icon iconName="github" />
		</a>
	</li>
</ul>

<style lang="postcss">
	/* prettier-ignore */

	.contactLinksAnimation {
		outline-color: theme(colors.primaryColor);
		/* duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
		animation: 
		contactLinksScale 200ms linear var(--animationDelay) 2 alternate,
		contactLinksBlink 200ms linear 1s 2 alternate;}

	@keyframes contactLinksBlink {
		0% {
			outline-offset: 0;
		}

		100% {
			outline-offset: 1em;
		}
	}
	@keyframes contactLinksScale {
		0% {
			scale: 1;
		}
		100% {
			scale: 2;
		}
	}
</style>
