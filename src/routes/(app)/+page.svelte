<script lang="ts">
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import InlineLink from '$lib/elements/InlineLink.svelte';
	import webDevelopment from '$lib/icons/webDevelopment.svg';
	import productResearch from '$lib/icons/productResearch.svg';
	import webDesign from '$lib/icons/webDesign.svg';
	import LazyLoad from '$lib/components/LazyLoad.svelte';
	import { showContactLinks } from '$lib/stores/contactLinksStore';

	import Project from '$lib/components/Project.svelte';
	let parentInlineSize;
</script>

<main class="m-auto flex w-full max-w-[94ch] flex-col gap-88-124" id="mainContent">
	<!--profileCard-->
	<div class="introduction-section">
		<ProfileCard />
	</div>

	<section
		id="portfolio"
		bind:clientWidth={parentInlineSize}
		class="scrollMarginTop m-auto mt-4 flex w-full max-w-[94ch] flex-col gap-88-124 [--scrollMarginTop:150px]">
		<header>
			<h2 class="text-5xl">Selected Projects</h2>

			<small>
				These are some of the projects that I have developed, designed, and/or researched.
			</small>
		</header>
		<div class="flex flex-wrap justify-evenly gap-x-[74px] gap-y-[10rem]" id="mainContent">
			<Project
				{parentInlineSize}
				imageName="pawFood"
				fileType="gif"
				buttonDisabled={true}
				project="NazCodeland"
				roles="User Research / User Interface / Front-end / Back-end"
				tools="Pen & Paper / Miro / Figma"
				duration="4 Months">
				<div slot="after">
					<p><strong>Project: </strong>NazCodeland</p>
					<p><strong>Roles: </strong>User Research / User Interface / Front-end / Back-end</p>
					<p><strong>Tools: </strong>Pen & Paper / Miro / Figma</p>
					<p><strong>Duration: </strong>4 Months</p>
					<br />
					<br />
					<strong>Summary:</strong>
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde quo animi consequuntur
					placeat dolor ipsum eos asperiores similique fugiat? Lorem ipsum dolor sit amet consectetur,
				</div>
			</Project>

			<Project
				{parentInlineSize}
				imageName="nazCodelandMobile"
				fileType="png"
				project="NazCodeland"
				roles="User Research / User Interface / Front-end / Back-end"
				tools="Pen & Paper / Miro / Figma"
				duration="4 Months">
				<div slot="before">
					<p><strong>Project: </strong>NazCodeland</p>
					<p><strong>Roles: </strong>User Research / User Interface / Front-end / Back-end</p>
					<p><strong>Tools: </strong>Pen & Paper / Miro / Figma</p>
					<p><strong>Duration: </strong>4 Months</p>
					<br />
					<br />
					<strong>Summary:</strong>
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde quo animi consequuntur
					placeat dolor ipsum eos asperiores similique fugiat? Lorem ipsum dolor sit amet consectetur,
				</div>
			</Project>
		</div>
	</section>

	<!-- aboutMe -->
	<section id="aboutMe" class="scrollMarginTop [--scrollMarginTop:150px]">
		<LazyLoad component={() => import('$lib/icons/TechStack.svelte')} let:Component>
			<Component />
		</LazyLoad>

		<h2
			class="forcedClrAdjust mb-24-40 mt-10 underline decoration-tertiaryColor decoration-double
						contrast-more:text-[canvasText] contrast-more:decoration-[activeText] sm:mt-20">
			About Me
		</h2>

		<p class="mb-16-32">
			I'm a front-end developer who's self-taught and finds pleasure in building visually pleasing,
			user-centric applications. My enthusiasm for this field has led me to gain experience in UX
			research and UI design. The intersection of these fields has allowed me to develop an
			understanding of various aspects, such as writing clean and maintainable code, performing
			software testing, understanding user behavior, validating assumptions, ensuring site-wide
			accessibility, and principles of visual design.
		</p>
		<p>
			If my skillset aligns with your needs and you believe I can help envision your project or add
			value to your team, feel free to <span class="whitespace-nowrap">
				<InlineLink on:click={showContactLinks} href="/#contact" title="contact me" />.</span> I am looking
			for new opportunities.
		</p>
	</section>

	<!-- skillCards -->
	<section class="flex flex-col gap-24-40">
		<h2
			class="forcedClrAdjust underline decoration-tertiaryColor
		decoration-double contrast-more:text-[canvasText] contrast-more:decoration-[activeText]">
			What I Do
		</h2>

		<div class="relative flex flex-wrap gap-24-40">
			<SkillCard title="Web Development">
				<!-- prettier-ignore -->
				<!-- href="/images/icons/svelte.svg" -->
				<img slot="icon" src={webDevelopment} alt="" loading="lazy" />
				<p class="mb-16-32">
					As a front-end developer, I have a strong foundation in HTML, CSS, JavaScript, and
					frameworks such as Svelte and SvelteKit. Whether I'm working with handed-off UI designs or
					starting from scratch, I strive to develop websites that are user-centric, visually
					appealing, accessible, and robust.
				</p>

				<p>
					However, I understand the importance of time constraints in real-world projects, and
					therefore, I approach the development process with a progressive enhancement mindset. This
					allows me to quickly produce minimum viable products (MVPs) or early functioning versions
					of websites.
				</p>
			</SkillCard>

			<SkillCard title="Product Research">
				<!-- prettier-ignore -->
				<img slot="icon" src="{productResearch}" alt="" loading="lazy">

				<p class="mb-16-32">
					I recognize the importance of creating products that satisfy the needs and expectations of
					customers. To achieve this goal, valuable insights need to be gathered from both
					qualitative and quantitative research, including identifying the needs, expectations, and
					behaviors of the target audience, conducting market research on similar products,
					performing comprehensive competitive analysis, and testing <abbr
						class=" decoration-primaryColor"
						title="Minimum Viable Products">MVPs</abbr
					>. By utilizing these and other market research techniques, a seamless user experience can
					be achieved, and worthwhile product features can be discovered that provide value to
					customers.
				</p>

				<p>
					To ensure a product remains competitive in the market and meets the expectations of its
					user, the product research process needs to be iterated over periodically with new inputs,
					such as user feedback and current market trends. This iterative process is required to
					build products that meet user expectations.
				</p>
			</SkillCard>

			<SkillCard title="Web Design">
				<!-- prettier-ignore -->
				<img slot="icon" src="{webDesign}" alt="" loading="lazy">
				<p class="mb-16-32">
					Similar to product research, I approach each project with a user-centric mindset. I begin
					by taking into account applicable insights gathered during the product research phase,
					such as user needs, preferences, and pain points. Additionally, I gain an understanding of
					the product's features and the problem it aims to solve. Using this information, I explore
					possible solutions through various iterations by creating multiple sketches and
					wireframes. These visualizations are used to determine the layout structure, content
					hierarchy, navigation, and user flows of the website, which, in turn, help in identifying
					usability issues early in the design process.
				</p>

				<p>
					After sketches and wireframes, I carefully select typography, brand colours, and imagery,
					and create icons, elements, and components for the website. These are used to produce
					responsive, high-fidelity, interactive prototypes that are put through usability testing
					and questionnaires to identify usability and accessibility issues.
				</p>
			</SkillCard>
		</div>
	</section>
</main>

<style>
</style>
