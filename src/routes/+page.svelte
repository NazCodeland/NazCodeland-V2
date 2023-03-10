<script>
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import SkillCard from '$lib/components/skillCard.svelte';
</script>

<div class="introduction-section mb-32">
	<ProfileCard />
</div>

<section class="skills-section mb-32">
	<h2 class="text-4xl font-bold ">What I Do</h2>

	<SkillCard title="Product Research"
		>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit nemo praesentium corporis
		blanditiis minima? Quibusdam delectus fugit sit? Hic."</SkillCard>
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
