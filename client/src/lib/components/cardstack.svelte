<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './card.svelte';
	import { PointerListener, Pan } from 'contactjs';
	import _ from 'lodash';

	// Eventually get this from a store
	let stack = [
		{
			id: 1,
			title: 'Wow listen to thissss!!!',
			caption: 'LOL this was so embarassing I cannot believe that this happened you need to hear!!',
			profile:
				'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
			audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
			author: '@josh',
			bg: '#00416a'
		},
		{
			id: 2,
			title: "I'm so excited for this!",
			caption: 'I cannot wait to see what happens next!',
			profile:
				'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
			audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
			author: '@sam25023',
			bg: '#68c990'
		},
		{
			id: 3,
			title: 'I love this song!',
			caption: 'This song is so good I cannot believe it!',
			profile:
				'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
			audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
			author: '@lucy123',
			bg: '#d887fe'
		}
	];

	let param = 'id';
	let cardContainer: HTMLSpanElement[] = [];
	let pointerListener: PointerListener;
	var panActive = false;

	const onPan = () => {
		if (panActive == false) {
			panActive = true;
		}
	};

	const onPanEnd = () => {
		if (panActive == true) {
			panActive = false;
		}
	};

	const onSwipeLeft = () => {
		stack = stack.slice(1);
		cardContainer = cardContainer.filter((el) => el != null);

		onPanEnd();
	};

	onMount(() => {
		listen();
	});

	const listen = () => {
		const options = {
			supportedGestures: [Pan]
		};

		cardContainer.forEach((card) => {
			pointerListener = new PointerListener(card, options);

			card.addEventListener('pan', onPan);
			card.addEventListener('swipeleft', onSwipeLeft);

			card.addEventListener('panend', function (event) {
				// @ts-expect-error -- event is not defined
				if (event.detail.recognizer.isSwipe == false) {
					onPanEnd();
				}
			});
		});
	};
</script>

<ul>
	{#if stack.length > 0}
		{#each _.orderBy(stack, [param], ['desc']) as card, i}
			<span bind:this={cardContainer[i]}>
				<Card {card} />
			</span>
		{/each}
	{:else}
		<p>Uh oh... you've reach the end of the line. Nothing else to show for today.</p>
	{/if}
</ul>

<style>
	ul {
		list-style: none;
		margin-top: 2rem;
		margin-bottom: 1rem;
		padding: 0;

		border-radius: 1rem;

		height: 100%;
		width: 93%;

		color: white;

		overflow: hidden;
		display: grid;
	}
	p {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
		text-align: center;
	}
	span {
		margin: 0;
		padding: 0;
		grid-column: 1;
		grid-row: 1;
		transition: top 0.2s ease-in-out, left 0.2s ease-in-out;
	}
</style>
