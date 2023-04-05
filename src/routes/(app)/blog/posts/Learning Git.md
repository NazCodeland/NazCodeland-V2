---
title: Learning Git
published: March 1st, 2023
updated: March 3rd, 2023
description: Create a simple CRUD application using the Django web framework. This is just extra text to make this sentence go into two paragraphs instead of one. Have a good day!
tags: ['html', 'css', 'javascript']
---

## Svelte

```svelte {5-7,10-11}
<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing
		<strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		inline-size: 100%;
	}

	.welcome {
		position: relative;
		inline-size: 100%;
		block-size: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		inline-size: 100%;
		block-size: 100%;
		inset-block-start: 0;
		display: block;
	}
</style>
```

```css

body {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: orange:
}
```
