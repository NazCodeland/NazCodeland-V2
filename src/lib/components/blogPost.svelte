<script lang="ts">
	export let title: string;
	export let createdAt: Date;
	export let slug: string = '';
	export let views: string | number;
	export let tags: string[];

	let appElement = document.querySelector('.app');

	// console.log(appElement);

	// const user = {
	// 	loggedIn: false
	// };

	// function toggle() {
	// 	user.loggedIn = !user.loggedIn;
	// 	updateUI();
	// }

	// function updateUI() {
	// 	let html;

	// 	if (user.loggedIn === false) {
	// 		html = `<button>Log In</button>`;
	// 	}
	// 	if (user.loggedIn === true) {
	// 		html = `<button>Log Out</button>`;
	// 	}

	// 	appElement.innerHTML = html;
	// 	appElement.onclick = toggle;
	// }
</script>

<article class="blogPost">
	<div class="blogPost__header">
		<a href="/blog/{slug}"><h3 class="text-3xl font-medium">{title}</h3></a>
		<div class="flex gap-4 justify-between ">
			<span>
				<span class="blogPost__date"> {createdAt}</span>
				<span class="blogPost__views"> {views}12 likes!</span>
			</span>
			<span class="blogPost__tags flex gap-4">
				{#each tags as tag}
					<a class="bg-slate-600 text-white px-4 py-2 rounded-md" href="/">{tag}</a>
				{/each}
			</span>
		</div>
	</div>

	<div class="blogPost__content">
		<slot>Hey</slot>
	</div>
</article>

<div class="app">22</div>

<style>
</style>
