<script lang="ts">
	export let title: string = 'title';
</script>

<a href="/" class="skill-card p-4 bg-grey-400">
	<h3 class="skill-card__title"><span>{title}</span></h3>

	<p class="skill-card__copy"><slot /></p>
</a>

<style>
</style>
