<script lang="ts">
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import SkillCard from '$lib/components/skillCard.svelte';
	import InlineLink from '$lib/elements/InlineLink.svelte';
	import viewport from '$lib/actions/lazyLoadingAction';

	import webDevelopment from '$lib/icons/webDevelopment.svg';
	import productResearch from '$lib/icons/productResearch.svg';
	import webDesign from '$lib/icons/webDesign.svg';
	import TechStack from '$lib/icons/techStack.svelte';

	let inViewport: Boolean;
	function handleEnter() {
		inViewport = true;
	}
	function handleExit() {
		inViewport = false;
	}
</script>

<main class="flex flex-col gap-96-132" id="mainContent">
	<!--profileCard-->
	<div class="introduction-section">
		<ProfileCard />
	</div>

	<!-- skillCards -->
	<section>
		<h2
			class="forcedClrAdjust mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)] underline decoration-tertiaryColor
		decoration-double contrast-more:text-[canvasText] contrast-more:decoration-[activeText]">
			What I Do
		</h2>

		<div class="relative flex flex-wrap gap-4">
			<SkillCard title="Web Development">
				<!-- prettier-ignore -->
				<!-- href="/images/icons/svelte.svg" -->
				<img src={webDevelopment} alt="" />
				<p>
					As a web developer, I have a passion for building websites that are both visually stunning
					and technically sound. I have experience with a range of programming languages and
					frameworks, including HTML, CSS, JavaScript, and React. My development approach is focused
					on creating clean, efficient, and scalable code that is optimized for performance and
					accessibility. I also place a high priority on user experience, ensuring that websites are
					easy to navigate and understand. Whether it's building a custom web application, a content
					management system, or an e-commerce platform, I take a meticulous approach to web
					development to create websites that are reliable, secure, and optimized for search
					engines.
				</p>
			</SkillCard>

			<SkillCard title="Product Research">
				<!-- prettier-ignore -->
				<img src="{productResearch}" alt="">

				<p>
					I recognize the importance of creating products that satisfy the needs and expectations of
					customers. To achieve this goal, valuable insights need to be gathered from both
					qualitative and quantitative research, identifying the needs, expectations and behavior of
					the target audience, conducting market research of similar products, performing
					comprehensive competitive analysis and testing minimum viable products (MVPs). By
					utilizing these and other market research techniques, we can achieve a seamless user
					experience and discover worthwhile product features that provide value to customers.
				</p>
				<p>
					Continuously refining the product ensures it remains competitive in the market. By
					analyzing user feedback and trends, we can update and improve the product's features and
					user experience to remain relevant and meet changing customer needs. This iterative
					process allows us to stay ahead of the competition and build products that exceed user
					expectations.
				</p>
			</SkillCard>

			<SkillCard title="Web Design">
				<!-- prettier-ignore -->
				<img src="{webDesign}" alt="">
				<p>
					Similar to product research, I approach each project with a user-centric mindset. I begin
					by taking into account applicable insights gathered during the product research phase,
					such as user needs, preferences, and pain points. Additionally, I gain an understanding of
					the product's features and the problem it aims to solve. Using this information, through
					various iterations, I explore possible solutions by creating multiple sketches and
					wireframes. These visualizations are used to determine the layout structure, content
					hierarchy, navigation, and user flows of the website, which, in turn, help in identifying
					usability issues early in the design process.
				</p>
				<br />
				<p>
					After sketching and wireframes, I carefully choose typography, brand colors, imagery, and
					create icons, elements, and components for the website. These are used to produce
					responsive, high-fidelity, interactive prototypes that are put through usability testing
					and questionnaires to identify usability and accessibility issues.
				</p>
			</SkillCard>
		</div>
	</section>

	<!-- aboutMe -->
	<section id="aboutMe" class="scrollMarginTop flex flex-col [--scrollMarginTop:230px]">
		<div>
			<TechStack />

			<h2
				class="forcedClrAdjust mt-10 mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)] underline decoration-tertiaryColor decoration-double
							contrast-more:text-[canvasText] contrast-more:decoration-[activeText] sm:mt-20">
				About Me
			</h2>
			<p>
				I'm a frontend developer who's self-taught and finds pleasure in building visually pleasing
				user-centric applications. My enthusiasm for this field has led me to gain some experience
				in UX research and UI design. The intersection of these fields has allowed me to develop an
				understanding of various aspects, such as writing clean and maintainable code, performing
				software testing, validating assumptions, understanding user behavior, ensuring site-wide
				accessibility and principles of visual design.
			</p>
			<br />
			<p>
				If my skillset aligns with your needs and you believe I can help in envisioning your project
				or add value to your team, feel free <span class="whitespace-nowrap"
					><InlineLink href="/contact" title="contact me" />.</span> I am always looking for new opportunities.
			</p>
		</div>
	</section>
	<!--  -->
</main>

<style>
</style>
