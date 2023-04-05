<script>
	import setAttributeOnDocumentAction from '$lib/actions/setAttributeOnDocumentAction';
</script>

<div
	class="flex flex-col gap-96-132 rounded-2xl bg-secondaryColor p-16-40 font-body
          text-fluid-3 leading-7 text-bodyCopy md:leading-8"
	use:setAttributeOnDocumentAction>
	<!--  -->

	<slot />
</div>

<style>
</style>
