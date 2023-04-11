<script>
	import { contactLinksStore } from '../stores/contactLinksStore';
	import Icon from './Icon.svelte';
</script>

<ul
	class="scrollMarginTop group/contact flex h-0 content-center items-center justify-center gap-3 [--scrollMarginTop:400px]"
	id="contact">
	<li
		class="{$contactLinksStore
			? 'contactLinksAnimation'
			: ''} mail grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38 outline outline-transparent
		transition-all duration-500 hover:scale-[2] hover:duration-150 [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="mailto:nazcodeland@gmail.com" rel="noopener">
			<Icon iconName="mail" />
		</a>
	</li>
	<li
		class="{$contactLinksStore
			? 'contactLinksAnimation'
			: ''} discord grid h-8 w-8 place-items-center rounded-lg bg-primaryColor/38 outline outline-transparent
		transition-all duration-500 hover:scale-[2] hover:duration-150 [&:not(:hover)]:group-hover/contact:scale-50">
		<a href="https://discordapp.com/users/804118317299400734">
			<Icon iconName="discord" />
		</a>
	</li>
	<li
		class="{$contactLinksStore
			? 'contactLinksAnimation'
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

		/* name|duration|easing-function|delay|iteration-count|direction|fill-mode|play-state|*/
		animation-name: contactLinksBlink;
		animation-duration: 0.2s;
		animation-iteration-count: 6;
		animation-direction:alternate;
		animation-timing-function: linear ease-in-out;

	}

	@keyframes contactLinksBlink {
		0% {
			outline-offset: 0;
		}

		100% {
			outline-offset: 1em;
		}
	}
</style>
