<script>
	import Logo from '$lib/components/Logo.svelte';
</script>


## Rust

```rust
println!("Made it here!");
```

## JavaScript

```js
console.log('Made it here!');
```

<br><testing123 style:margin='auto'><Logo /></testing123>

## CSS

```css
body {
	background-color: blue;
}

.btn {
	/* display: inline-block; is this needed?*/
	min-inline-size: 110px;
	white-space: nowrap;
	padding: clamp(0.5rem, calc(0.66rem + -0.18vw), 0.63rem) 1rem;
	text-align: center;
	border-radius: theme(borderRadius.lg);

	/* --btn-text-color is not defined so it will fallback to inheriting the color in this situation */
	color: rgba(var(--btn-text-color));

	--btn-bg-opacity: theme(opacity.12);
	--btn-bg: 255, 255, 255;
	background-color: rgba(var(--btn-bg), var(--btn-bg-opacity));

	box-shadow: var(--box-shadow-rest);
	transition: ease-in-out transform 0.15s;
}
```
