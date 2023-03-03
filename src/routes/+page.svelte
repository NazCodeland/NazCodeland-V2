<script>
	import SkillCard from '../lib/components/SkillCard.svelte';
</script>

<div class="introduction-section mb-32">
	<article class="profile-card">
		<img
			class="profile-card__image"
			src="/images/someImage.jpeg"
			width="320"
			height="320"
			alt="of Nazar"
		/>

		<div class="profile-card__content">
			<h2 class="profile-card__title">
				Nazar K. I.
				<br />
				<!-- using 'display: block' on the below small elements class, 
              causes an undesirable pause in the NVDA screen reader. '<br> does not.'-->
				<small class="profile-card__subtitle">Frontend Developer</small>
			</h2>

			<p class="profile-card__copy">
				Hey👋 <br />welcome to my little spot on the web. I made this website to showcase my skill
				set, through my <a href="/portfolio" class="link">Portfolio</a>, to potential employers.
				It's also a place for me to <a href="/blog" class="link">Blog</a> about what I am learning and
				to reference it in the future.
			</p>

			<footer class="profile-card__footer">
				<a class="btn btn-filled-primary" href="/portfolio">View Portfolio</a>
				<a class="btn btn-outlined-primary" href="/resume">View Resume</a>
			</footer>
		</div>
	</article>
</div>

<section class="skills-section mb-32">
	<h2 class="text-4xl font-bold ">What I Do</h2>

	<SkillCard title="Product Research"
		>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit nemo praesentium corporis
		blanditiis minima? Quibusdam delectus fugit sit? Hic."</SkillCard
	>
	<SkillCard title="Web Design">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur nobis laudantium ea.
		Maiores, non! Numquam veritatis possimus accusantium, odio, natus quo consectetur, vel libero
		reprehenderit ipsum neque dolorum cumque modi unde optio. Qui autem debitis quis nobis est
		asperiores aperiam voluptatibus optio pariatur dolores?
	</SkillCard>
	<SkillCard title="Web Development">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit nemo praesentium corporis
		blanditiis minima? Quibusdam delectus fugit sit? Hic.
	</SkillCard>
</section>

<style>
</style>
