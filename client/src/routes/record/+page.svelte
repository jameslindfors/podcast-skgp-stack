<script lang="ts">
	import Recordbutton from '$lib/components/recordbutton.svelte';

	let isRecording = false;
</script>

<svelte:head>
	<title>{isRecording ? 'Recording...' : 'Record'}</title>
</svelte:head>
<main>
	<section>
		<div class="timeline">
			<h2>Timeline</h2>
		</div>
		<div class="timeremaining">
			<h2>Time remaining 00:00</h2>
		</div>
	</section>
	<footer>
		<div class="audio-controls">controls</div>
		<div class="record-button">
			{#if isRecording}
				<button
					on:click={() => {
						console.log('stop');
					}}>Stop</button
				>
			{:else}
				<Recordbutton />
			{/if}
		</div>
		<div class="next-button">
			{#if isRecording}
				<button disabled>Next</button>
			{:else}
				<button>Next</button>
			{/if}
		</div>
	</footer>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		margin: 0 1rem;
	}

	.audio-controls {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
	}

	.record-button {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.next-button {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
