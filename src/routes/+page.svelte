<script>
	import { Carousel, Heading } from 'flowbite-svelte';

	function generateTestImage(randomSizeLimit = 400, fixedSizeLimit = 200) {
		const id = Math.random() * 100000000;

		return {
			id,
			name: 'Test image ' + id,
			imgurl: `https://picsum.photos/${
				Math.floor(Math.random() * randomSizeLimit) + fixedSizeLimit
			}/${Math.floor(Math.random() * randomSizeLimit) + fixedSizeLimit}?random=${id}`,
			attribution: 'picsum photos'
		};
	}

	const productSameSize = {
		id: 'Product',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis tincidunt aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.`,
		price: 20.99,
		images: Array(7)
			.fill({ id: 0, imgurl: '' })
			.map((item, index) => {
				return {
					id: index,
					imgurl: generateTestImage(0, 600).imgurl
				};
			})
	};

	const product = {
		id: 'Product',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis tincidunt aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Sed euismod, nisl quis tincidunt aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.`,
		price: 20.99,
		images: Array(5)
			.fill({ id: 0, imgurl: '' })
			.map((item, index) => {
				return {
					id: index,
					imgurl: generateTestImage().imgurl
				};
			})
	};
</script>

<Heading level="1" class="text-center my-5 text-7xl mb-10 underline"
	>Updated Flowbite Gallery Example</Heading
>

<Heading level="1" class="text-center my-5">Custom Styled</Heading>
<div id="carousel-wrapper" class="dark m-auto max-w-2xl bg-gray-100 p-2">
	<Carousel
		images={productSameSize.images}
		showCaptions={false}
		showIndicators={false}
		classSlide="flex items-center justify-center h-full w-full !rounded-none !bg-transparent"
		classDiv="w-[100%] !h-[300px] sm:!h-[400px] !rounded-none !bg-transparent"
		classImg="!bg-none rounded-md animate-[fadeIn_.5s_ease-in-out_1] h-full"
		classThumb="p-0 rounded-md shadow-xl hover:outline hover:outline-primary-500"
		classThumbDiv="bg-transparent"
		thumbBtnClass="m-2"
	/>
</div>

<Heading level="1" class="text-center my-5">Different Size Images</Heading>
<div id="carousel-wrapper" class="dark m-auto bg-gray-100 p-2 max-w-2xl">
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

<hr class="m-5" />

<div class="max-w-2xl m-auto">
	<Heading level="1" class="text-center my-5">Default <em>(no params)</em></Heading>
	<div class="dark">
		<Carousel images={productSameSize.images} showCaptions={false} />
	</div>
	<Heading level="1" class="text-center my-5 text-black-900 flex-1"
		>Default @ different sizes</Heading
	>
	<div class="dark">
		<Carousel images={product.images} showCaptions={false} />
	</div>
</div>
