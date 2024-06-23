<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	let showImages = true;
	let showDrinks = false;

	type VariantDetails = {
		name: string | null;
		price: number | null;
	};

	type AddonDetails = {
		name: string;
		price: number;
	};

	type DishDetails = {
		id: number;
		img: string | null;
		name: string;
		quantity: string | null;
		type: string | null;
		description: string;
		variants: VariantDetails[];
		price: number | null;
		addons: AddonDetails[];
	};

	type DrinkDetails = {
		id: number;
		img: string | null;
		name: string;
		quantity: string | null;
		type: string | null;
		size: string | null;
		description: string | null;
		variants: object[];
		price: number | null;
	};

	let foodMenu: { [key: string]: DishDetails[] } = {
		'small plates': [
			{
				id: 1,
				img: '/images/projects/saigon/menu/dishes/small-plates/vegetarian-spring-rolls',
				name: 'Vegetarian Spring Rolls',
				quantity: '2',
				type: null,
				description:
					'Egg roll wrapped shredded sweet potato, cabbage, taro, and clear vermicelli served with nuoc cham sauce. Hot, super crispy, and addictive!',
				variants: [],
				price: 9,
				addons: []
			},
			{
				id: 2,
				img: '/images/projects/saigon/menu/dishes/small-plates/salad-rolls',
				name: 'Salad Rolls',
				quantity: '2',
				type: null,
				description:
					'Rice paper wrap with shredded lettuce, mint, vermicelli, served with house made hoisin based dipping sauce or nuoc cham sauce. A classic.',
				variants: [
					{ name: 'Grilled tofu', price: null },
					{ name: 'Grilled shrimp', price: null }
				],
				price: 10,
				addons: []
			},
			{
				id: 3,
				img: '/images/projects/saigon/menu/dishes/small-plates/papaya-salad',
				name: 'Papaya Salad',
				quantity: null,
				type: 'GF',
				description:
					'Shredded green papaya, carrots, mango, chopped fresh mint served with nuoc cham dressing and shrimp chips. Light and refreshing!',
				variants: [],
				price: 10,
				addons: [{ name: 'Shrimp', price: 3 }]
			}
		]
	};

	let drinkMenu: { [key: string]: DrinkDetails[] } = {
		'signature-cocktails': [
			{
				id: 1,
				img: '/images/projects/saigon/menu/drinks/signature-cocktails/spill-the-tea',
				name: 'Spill The Tea',
				quantity: 'serves 2ppl',
				type: null,
				size: '5.5 oz',
				description:
					'House infused chrysanthemum Luksusowa Vodka, orange and brandy liqueur, honey, lemon juice. a refreshing citrussy vodka based cocktail with floral chrysanthemum tea notes. served chilled in a beautiful tea pot for 2. spill the tea, but sip it slow!',
				variants: [],
				price: 32
			},
			{
				id: 2,
				img: '/images/projects/saigon/menu/drinks/signature-cocktails/mangos-in-the-market',
				name: 'Mangos in the market',
				quantity: null,
				type: null,
				size: '3 oz',
				description:
					'El Jimador Tequila, Malibu Coconut Rum, Mezcal, Mango nectar, lime juice, chili salted rim. Inspired by travels in Vietnam, where street vendors serve fresh sliced mango with chili salt. Bringing the perfect pairing to the Byward Market!',
				variants: [],
				price: 18
			},
			{
				id: 3,
				img: '/images/projects/saigon/menu/drinks/signature-cocktails/pop-it-like-its-hot',
				name: "Pop it like it's hot",
				quantity: null,
				type: null,
				size: '1.5 oz',
				description: `Luksusowa Vodka, Saigon iced tea, Popping boba. First of it's kind in Ottawa! Refreshing and delicious bubble tea made for fun adults.`,
				variants: [],
				price: 16
			}
		]
	};
</script>

<section class="menu flex flex-col items-center gap-8">
	<div class="flex flex-wrap items-center justify-center gap-2">
		<button
			type="button"
			class="w-32 select-none rounded border py-2 {showDrinks ? '' : ' border-theme-primary '}"
			on:click={() => (showDrinks = false)}>
			FOOD
		</button>
		<button
			type="button"
			class="w-32 select-none rounded border py-2 {showDrinks ? ' border-theme-primary' : ''}"
			on:click={() => (showDrinks = true)}>
			DRINKS
		</button>
	</div>

	<button
		type="button"
		class="w-30 hidden select-none whitespace-nowrap rounded border border-[#474747] px-4 py-2 text-gray-300 motion-safe:inline-block"
		on:click={() => (showImages = !showImages)}>
		{#if showImages}
			Hide Images
		{:else}
			Show Images
		{/if}
	</button>

	{#key showDrinks}
		<div class="grid gap-12 md:gap-24" transition:fade={{ duration: 150 }}>
			{#if !showDrinks}
				<!-- food menu -->
				{#each Object.entries(foodMenu) as [category, items]}
					<section class="grid gap-4">
						<h2
							class="text-theme-secondary selection:text-theme-background text-center text-3xl font-bold selection:bg-[#FFFF00]">
							{category.toUpperCase()}
						</h2>
						<ul class="flex flex-wrap justify-center gap-4">
							{#each items as item (item.id)}
								<li
									class="flex w-full max-w-[380px] flex-col gap-1 rounded-md border border-[#474747] p-2">
									<!-- if menu item contains an image -->
									{#if showImages && item.img}
										<figure
											class="flex flex-col gap-2"
											transition:slide={{ duration: 150, delay: 0 }}>
											<picture class="select-none overflow-hidden rounded-md">
												<source srcset="{item.img}.avif" type="image/avif" />
												<source srcset="{item.img}.webp" type="image/webp" />
												<img
													loading="lazy"
													class="{item.img.includes('beef-pho') ||
													item.img.includes('king-oyster-mushrooms')
														? 'object-left-bottom'
														: ''}
													{item.img.includes('steamed-wonton') ? 'object-right' : ''}
														motion-safe:transition-scale h-[320px] w-full max-w-[380px] object-cover motion-safe:duration-200 motion-safe:hover:scale-150"
													src="{item.img}.webp"
													alt={item.name} />
											</picture>

											<figcaption class="text-center">
												<strong class="text-theme-secondary text-lg font-bold">
													{item.name.toUpperCase()}
													{#if item.type}({item.type.toUpperCase()}){/if}
													{#if item.quantity}({item.quantity}){/if}
												</strong>
											</figcaption>
										</figure>
									{:else}
										<!-- if menu item does not contain an image -->
										<strong class="text-theme-secondary text-lg font-bold">
											{item.name.toUpperCase()}
											{#if item.type}({item.type.toUpperCase()}){/if}
											{#if item.quantity}({item.quantity}){/if}
										</strong>
									{/if}
									<p>{item.description}</p>
									<!-- variants -->
									{#if item.variants.length > 0}
										<p>Choice of:</p>
									{/if}
									{#each item.variants as variant}
										{#if variant.name}
											<p>
												- {variant.name}
												{#if variant.price}<strong>${variant.price}</strong>{/if}
											</p>
										{/if}
									{/each}
									<!-- regular item price -->
									{#if item.price}
										<strong>${item.price}</strong>
									{/if}
									<!-- addons -->
									{#each item.addons as addon}
										<span> {addon.name} + <strong> ${addon.price}</strong></span>
									{/each}
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			{:else}
				<!-- drinks menu -->
				{#each Object.entries(drinkMenu) as [category, items]}
					<section class="grid gap-4">
						<h2
							class="text-theme-secondary selection:text-theme-background text-center text-3xl font-bold selection:bg-[#FFFF00]">
							{category.toUpperCase()}
						</h2>
						<ul class="flex flex-wrap justify-center gap-4">
							{#each items as item (item.id)}
								<li
									class="flex w-full max-w-[380px] flex-col gap-1 rounded-md border border-[#474747] p-2">
									{#if showImages && item.img}
										<figure
											class="flex flex-col gap-2"
											transition:slide={{ duration: 150, delay: 0 }}>
											<picture class="select-none">
												<source srcset="{item.img}.avif" type="image/avif" />
												<source srcset="{item.img}.webp" type="image/webp" />
												<img
													loading="lazy"
													class="h-[320px] w-full max-w-[380px] object-cover"
													src="{item.img}.webp"
													alt={item.name} />
											</picture>
											<figcaption class="text-center">
												<strong class="text-theme-secondary text-lg font-bold">
													{item.name.toUpperCase()}
													{#if item.type}({item.type.toUpperCase()}){/if}
													{#if item.quantity}({item.quantity.toUpperCase()}){/if}
												</strong>
											</figcaption>
										</figure>
									{:else}
										<!-- if menu item does not contain an image -->
										<strong class="text-theme-secondary text-lg font-bold">
											{item.name.toUpperCase()}
											{#if item.type}({item.type.toUpperCase()}){/if}
											{#if item.quantity}({item.quantity.toUpperCase()}){/if}
										</strong>
									{/if}

									<p>
										{#if item.size}({item.size}){/if}
										{#if item.description}{item.description}{/if}
									</p>

									<!-- regular item price -->
									{#if item.price}
										<strong>${item.price}</strong>
									{/if}

									{#each item.variants as variant}
										<p>
											{#if variant.name}
												{variant.name}
											{/if}
											{#if variant.size}
												{variant.size}
											{/if}
											{#if variant.name == 'chrysanthemum' || variant.name == 'green tea, earl grey, jasmine'}
												<br />
											{/if}
											{#if variant.price}<strong>${variant.price}</strong>{/if}
										</p>
									{/each}
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			{/if}
		</div>
	{/key}
</section>

<style>
</style>
