<script lang="ts">
</script>

<section class="line-numbers">
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		inline-size: clamp(0vw, 100%, 900px);
		margin: auto;

		font-size: 1rem;
	}
</style>
