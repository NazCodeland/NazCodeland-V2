<script>
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import moveToTop from '$lib/icons/themeBased/moveToTop/moveToTopMain.svg';
	import viewport from '$lib/actions/viewportAction';

	export let data;

	let showMoveToTop = false;
</script>

<main class="m-auto w-full max-w-[60ch]">
	<img
		use:viewport
		on:enteringViewport={() => (showMoveToTop = false)}
		on:exitingViewport={() => (showMoveToTop = true)}
		loading="lazy"
		id="mainContent"
		class="absolute left-0 right-0 top-0 m-auto h-[100vh] w-full max-w-[1470px] object-cover"
		src={data.projectImages.clothing}
		alt="" />

	<article class="flex flex-col gap-4 pt-[100vh]">
		<TableOfContents
			contents={[
				'Overview',
				'Understanding',
				'Research',
				'Design',
				'Flow-1',
				'Flow-2',
				'Prototype',
				'Evaluation',
				'Visual',
				'Next Steps',
				'Reflection'
			]} />

		<!--  -->

		<h2 id="Overview">Some SubTitle</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab dolores excepturi iusto, cum
			incidunt, commodi saepe enim nemo amet eos veritatis porro cupiditate est aliquam consectetur
			eveniet at illum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nisi
			molestiae quo accusantium eligendi autem aliquam necessitatibus obcaecati a sint quae tempora
			provident at, architecto, eveniet molestias aliquid laudantium repellat dolore iure
			voluptatibus laboriosam nesciunt temporibus voluptatum! Fugit, odio corrupti rem eveniet,
			architecto hic nihil non corporis vero ipsa sapiente eaque assumenda expedita consectetur
			culpa? Voluptates, aliquid numquam soluta, placeat facere voluptas atque ab sunt error sed
			maiores eaque quidem, harum enim sint reiciendis cupiditate ducimus dolorem repellat. Eum,
			reiciendis maxime maiores doloribus iure aut? Repellat suscipit consectetur eaque dolore
			perspiciatis asperiores officiis dolor veritatis tempora natus! Corrupti minus voluptatum illo
			qui adipisci aliquam praesentium nihil mollitia, inventore quis! Tempore nesciunt, fuga neque,
			eum provident temporibus laboriosam quia libero ullam asperiores aut. Accusamus saepe rem
			debitis! Temporibus adipisci amet officia dignissimos, rerum exercitationem! Laboriosam dicta
			dignissimos deserunt cum repellat numquam a eveniet aperiam natus, unde nam minus fugiat
			dolore ducimus atque hic voluptatibus aut iste nostrum distinctio quae molestias non ex vitae!
			Rerum autem in excepturi architecto eligendi error possimus exercitationem incidunt, laborum
			temporibus saepe unde quas quam nam. Sequi, fugiat quam doloribus ex eos voluptatem deserunt
			iure, rem, adipisci quas distinctio magni exercitationem nesciunt iusto fugit! Iure, natus
			rerum.
		</p>

		<br />
		<br />

		<h2 id="Design">Design</h2>
		<p>
			Lorem ipsum dolor sit, amet adipisicing elit. Voluptatum enim distinctio ratione repudiandae
			doloribus quas animi quo ipsum odit fuga sed, molestias magni odio, asperiores minima. Sit
			velit minima ab quas impedit modi eaque est, molestiae veritatis optio explicabo officia?
			Corrupti blanditiis, quasi veritatis veniam quo minima, alias, tempore repellat aliquid ipsam
			velit. Mollitia, nostrum laboriosam magni totam voluptatum nesciunt veniam, eaque modi ad ab
			officiis possimus voluptatem incidunt, explicabo fuga recusandae obcaecati ipsa tempore atque
			saepe similique itaque a harum assumenda! Explicabo laboriosam molestiae repellat id voluptas.
			Inventore neque, non cum quo consequatur deleniti eligendi optio id aspernatur, maiores
			laudantium fugit quis mollitia nesciunt minima sapiente voluptate sed quia blanditiis dolorem
			officiis nulla voluptatem quasi! Sunt pariatur possimus in hic voluptatem recusandae quam
			excepturi, blanditiis obcaecati iste maiores iusto inventore. Iste, vitae! Dolores rem
			architecto ea eius nobis dolorem veniam. Animi enim placeat laborum totam asperiores?
			Voluptatum praesentium facere saepe. Alias, nostrum. Similique fugiat voluptates laudantium
			expedita excepturi nobis magni provident facere sint eligendi. Commodi odit, fuga consequuntur
			maiores beatae ex vitae mollitia facere laboriosam. Excepturi ipsa ipsum ducimus sunt
			distinctio iure rem tempora saepe perferendis. Soluta quidem incidunt suscipit deserunt dolor,
			veritatis cupiditate corporis, ex nulla, ab!
		</p>

		{#if showMoveToTop}
			<a href="#mainContent">
				<img
					loading="lazy"
					src={moveToTop}
					alt="move to top"
					class="fixed bottom-[6vh] left-[45vw] z-10 rounded-full border border-primaryColor bg-secondaryColor shadow-rest hover:shadow-hover active:shadow-active sm:left-[48vw]" />
			</a>
		{/if}
	</article>
</main>

<style>
</style>
