<script lang="ts">
	import Wavesurfer from 'wavesurfer.js';
	import { onMount } from 'svelte';

	let wavesurfer: Wavesurfer;

	export let audio: string;

	onMount(() => {
		wavesurfer = Wavesurfer.create({
			container: '#waveform',
			waveColor: 'violet',
			progressColor: 'purple'
		});
		wavesurfer.load(audio);
	});

	const play = () => {
		wavesurfer.play();
	};

	const pause = () => {
		wavesurfer.pause();
	};

	const stop = () => {
		wavesurfer.stop();
	};

	const toggleMute = () => {
		wavesurfer.toggleMute();
	};

	const toggleScroll = () => {
		wavesurfer.toggleScroll();
	};

	const toggleInteraction = () => {
		wavesurfer.toggleInteraction();
	};

	const toggleCursor = () => {
		wavesurfer.toggleCursor();
	};

	const zoom = (e: MouseEvent) => {
		const target = e.target as HTMLButtonElement;
		const direction = target.dataset.direction;
		const amount = target.dataset.amount;
		wavesurfer.zoom(Number(amount) * (direction === 'in' ? 1 : -1));
	};

	const togglePlay = () => {
		wavesurfer.playPause();
	};

	const toggleLoop = () => {
		wavesurfer.setLoop(!wavesurfer.isLooping);
	};

	const toggleMuteAll = () => {
		wavesurfer.toggleMute();
	};

	const toggleScrollAll = () => {
		wavesurfer.toggleScroll();
	};

	const toggleInteractionAll = () => {
		wavesurfer.toggleInteraction();
	};

	const toggleCursorAll = () => {
		wavesurfer.toggleCursor();
	};

	const zoomAll = (e: MouseEvent) => {
		const target = e.target as HTMLButtonElement;
		const direction = target.dataset.direction;
		const amount = target.dataset.amount;
		wavesurfer.zoom(Number(amount) * (direction === 'in' ? 1 : -1));
	};

	const togglePlayAll = () => {
		wavesurfer.playPause();
	};

	const toggleLoopAll = () => {
		wavesurfer.setLoop(!wavesurfer.isLooping);
	};
</script>

<div class="container">
	<div class="controls">
		<button on:click={play}>Play</button>
		<button on:click={pause}>Pause</button>
		<button on:click={stop}>Stop</button>
		<button on:click={toggleMute}>Mute</button>
		<button on:click={toggleScroll}>Scroll</button>
		<button on:click={toggleInteraction}>Interaction</button>
		<button on:click={toggleCursor}>Cursor</button>
		<button data-direction="in" data-amount="0.5" on:click={zoom}>Zoom In</button>
		<button data-direction="out" data-amount="0.5" on:click={zoom}>Zoom Out</button>
		<button on:click={togglePlay}>Play/Pause</button>
		<button on:click={toggleLoop}>Loop</button>
	</div>
	<div class="waveform" id="waveform" />
	<div class="controls">
		<button on:click={toggleMuteAll}>Mute All</button>
		<button on:click={toggleScrollAll}>Scroll All</button>
		<button on:click={toggleInteractionAll}>Interaction All</button>
		<button on:click={toggleCursorAll}>Cursor All</button>
		<button data-direction="in" data-amount="0.5" on:click={zoomAll}>Zoom In All</button>
		<button data-direction="out" data-amount="0.5" on:click={zoomAll}>Zoom Out All</button>
		<button on:click={togglePlayAll}>Play/Pause All</button>
		<button on:click={toggleLoopAll}>Loop All</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.controls {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
	}

	.waveform {
		width: 100%;
		height: 100px;
	}
</style>
