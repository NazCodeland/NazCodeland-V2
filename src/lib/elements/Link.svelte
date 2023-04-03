<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<li>
	<a
		{href}
		class="relative outline-0 before:absolute before:left-[50%] before:bottom-0
  before:h-0.5 before:w-0 before:bg-primaryColor before:delay-[0s] before:duration-300
  before:content-[''] hover:before:left-0 hover:before:w-full focus:before:left-0
  focus:before:w-full group-data-[themePalette=main]:contrast-more:before:bg-[activeText]">
		{title}</a>
	<slot />
</li>

<style>
</style>
