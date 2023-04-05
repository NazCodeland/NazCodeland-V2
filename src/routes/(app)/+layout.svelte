<script lang="ts">
	import '../../app.css';
	import setAttributeOnDocumentAction from '$lib/actions/setAttributeOnDocumentAction';
</script>

<div
	class="siteWrapper relative bg-primaryColor p-4-32 pt-4/16-32/48 transition-[padding-top] delay-[0] duration-1000"
	use:setAttributeOnDocumentAction>
	<div
		class="flex flex-col gap-96-132 rounded-2xl bg-secondaryColor p-16-40 font-body text-fluid-3 leading-7 text-bodyCopy md:leading-8">
		<!--  -->

		<slot />

		<footer
			class="site-wide-footer flex justify-end border-b border-solid
				border-primaryColor">
			<p>&copy; 2023 NazCodeland</p>
		</footer>
		<!--  -->
	</div>
</div>

<style>
</style>
