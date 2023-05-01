<script lang="ts">
</script>

<div class="scrollbar-track">
	<span class="scrollbar-thumb" />
</div>

<!-- didn't have time to complete this, maybe in the future -->
<style lang="postcss">
	.scrollbar-track {
		display: grid;
		place-items: center;
		position: absolute;
		inset-inline-end: 0;
		inset-block-start: 0;
		inline-size: 8px;
		block-size: 100%;

		background-color: lightgrey;
		border-radius: 4px;
		padding-inline-start: 4px;
		padding-inline-end: 5.6px;
	}
	.scrollbar-thumb {
		position: absolute;
		inset-block-start: 0;
		inline-size: 8px;
		block-size: 50px;
		background-color: theme(colors.primaryColor);
		border-radius: 4px;
		cursor: pointer;
	}
</style>
