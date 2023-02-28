<script>
	import '../app.css';
	import Navigation from '../lib/components/Navigation.svelte';
</script>

<header class="site-wide-header">
	<!-- <Navigation /> -->
</header>

<main class="container flex justify-center">
	<div>
		<slot />
	</div>
</main>
