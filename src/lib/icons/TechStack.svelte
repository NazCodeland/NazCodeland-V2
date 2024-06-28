<script>
	import techStack from '$lib/icons/techStack.svg';
</script>

<figure class="image relative float-right mt-16 w-full max-w-[600px] pl-32">
	<img src={techStack} alt="" loading="lazy" />
	<figcaption class=" max-w-[400px]">
		<!-- techStack title svg -->
		<svg
			class="innerSvg absolute -top-[76px] left-0 h-[300px] w-full fill-bodyCopy text-fluid-1"
			xmlns="http://www.w3.org/2000/svg"
			xml:lang="en"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 500 700">
			<title>Circular Text Path</title>
			<defs>
				<path
					id="textcircle"
					d="M225,140 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,570Z" />
			</defs>
			<g class="">
				<text>
					<textPath
						textLength="15em"
						xlink:href="#textcircle"
						aria-label="Tech Stack and Tools that I use">
						Tech Stack and Tools that I use
					</textPath>
				</text>
			</g>
		</svg>
	</figcaption>
</figure>

<style>
	.image {
		shape-outside: url('/src/lib/icons/techStack.svg');
		shape-margin: 1rem;
	}

	@media (min-width: 370px) {
		.innerSvg path {
			d: path('M211.5,136.923 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,618.46Z');
		}
	}
	@media (min-width: 420px) {
		.innerSvg path {
			d: path('M205,133.846 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,666.92Z');
		}
	}
	@media (min-width: 470px) {
		.innerSvg path {
			d: path('M200,130.769 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,715.38Z');
		}
	}
	@media (min-width: 520px) {
		.innerSvg path {
			d: path('M195,127.692 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,763.84Z');
		}
	}
	@media (min-width: 570px) {
		.innerSvg path {
			d: path('M190,124.615 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,812.3Z');
		}
	}
	@media (min-width: 620px) {
		.innerSvg path {
			d: path('M185,121.538 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,860.76Z');
		}
	}
	@media (min-width: 670px) {
		.innerSvg path {
			d: path('M180,118.461 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,909.22Z');
		}
	}
	@media (min-width: 720px) {
		.innerSvg path {
			d: path('M170,115.384 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,957.68Z');
		}
	}
	@media (min-width: 820px) {
		.innerSvg path {
			d: path('M145,109.23 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1054.6Z');
		}
	}
	@media (min-width: 920px) {
		.innerSvg path {
			d: path('M100,103.076 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1151.52Z');
		}
	}
	@media (min-width: 970px) {
		.innerSvg path {
			d: path('M100,100 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1250Z');
		}
	}
	@media (min-width: 1020px) {
		.innerSvg path {
			d: path('M80,100 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1250Z');
		}
	}
	@media (min-width: 1120px) {
		.innerSvg path {
			d: path('M60,100 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1250Z');
		}
	}
	@media (min-width: 1170px) {
		.innerSvg path {
			d: path('M40,100 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1250Z');
		}
	}
	@media (min-width: 1170px) {
		.innerSvg path {
			d: path('M40,100 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1250Z');
		}
	}
	@media (min-width: 1220px) {
		.innerSvg path {
			d: path('M20,100 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1250Z');
		}
	}
	@media (min-width: 1320px) {
		.innerSvg path {
			d: path('M0,100 a0,0 0 0, 0 0, 0 a190,150 0 0,1 0,1400Z');
		}
	}
</style>
