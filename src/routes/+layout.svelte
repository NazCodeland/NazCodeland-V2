<script lang="ts">
	import '$src/app.css';
	import setAttributeOnDocumentAction from '$lib/actions/setAttributeOnDocumentAction';
</script>

<div
	class="siteWrapper bg-primaryColor p-4-32 pt-4/16-32/48 transition-[padding-top] delay-[0] duration-1000"
	use:setAttributeOnDocumentAction>
	<slot />
</div>

<style>
</style>
