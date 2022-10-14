<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './card.svelte';
	import { PointerListener, Pan } from 'contactjs';

	// Eventually get this from a store
	export let stack = [
		{
			content: 'Hello world'
		}
	];

	let stackContainer: HTMLElement;
	let pointerListener: PointerListener;
	var panActive = false;

	function onPan(event: unknown) {
		console.log('pan', event);
		if (panActive == false) {
			panActive = true;
			console.log('pan active');
		}
	}

	function onPanEnd(event: unknown) {
		console.log('pan end', event);
		if (panActive == true) {
			panActive = false;
			console.log('pan inactive');
		}
	}

	function onSwipeLeft(event: unknown) {
		console.log('swipe left');
		onPanEnd(event);
	}
	function onSwipeRight(event: unknown) {
		console.log('swipe right');
		onPanEnd(event);
	}

	onMount(() => {
		const options = {
			supportedGestures: [Pan]
		};

		pointerListener = new PointerListener(stackContainer, options);
		stackContainer.addEventListener('pan', onPan);
		stackContainer.addEventListener('swiperight', onSwipeRight);
		stackContainer.addEventListener('swipeleft', onSwipeLeft);

		stackContainer.addEventListener('panend', function (event) {
			// @ts-expect-error -- event is not defined
			if (event.detail.recognizer.isSwipe == false) {
				onPanEnd(event);
			}
		});
	});
</script>

<ul bind:this={stackContainer}>
	{#each stack as card, i}
		<Card />
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 1rem;
		margin-top: 3.5rem;
		margin-bottom: 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		border-radius: 1rem;

		height: 55vh;
		width: 85%;

		color: white;

		overflow: hidden;

		background: #00416a;
		background: -webkit-linear-gradient(to bottom, #e4e5e6, #00416a);
		background: linear-gradient(to bottom, #e4e5e6, #00416a);
	}
</style>
