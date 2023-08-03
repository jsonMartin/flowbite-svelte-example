<script>
	import { Carousel, Heading } from 'flowbite-svelte';

	function generateTestImage(randomSizeLimit = 400, fixedSizeLimit = 200) {
		const id = Math.random() * 100000000;

		return {
			id,
			name: 'Test image ' + id,
			imgurl: `https://picsum.photos/${
				Math.floor(Math.random() * randomSizeLimit) + fixedSizeLimit
			}/${Math.floor(Math.random() * randomSizeLimit) + fixedSizeLimit}?random=6`,
			attribution: 'picsum photos'
		};
	}

	const product = {
		id: 'Product',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis tincidunt aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.`,
		price: 20.99,
		images: Array(4)
			.fill({ id: 0, imgurl: '' })
			.map((item, index) => {
				return {
					id: index,
					imgurl: generateTestImage().imgurl
				};
			})
	};
</script>

<Heading level="1" class="text-center my-5">Gallery Example</Heading>
<div id="carousel-wrapper" class="dark m-auto max-w-[600px]">
	<Carousel
		images={product.images}
		showCaptions={false}
		showIndicators={false}
		classSlide="flex items-center justify-center h-[100%] w-[100%] !rounded-none !bg-transparent"
		classDiv="w-[100%] !h-[300px] sm:!h-[400px] !rounded-none !bg-transparent"
		classImg="!bg-none rounded-md animate-[fadeIn_.2s_ease-in-out_1] h-full"
		classThumb="p-0 rounded-md shadow-xl hover:outline hover:outline-primary-500"
		classThumbDiv="bg-transparent"
		thumbBtnClass="m-2"
	/>
</div>
