<script lang="ts">
	import Recordbutton from '$lib/components/recordbutton.svelte';
	import Recordingdisplay from '$lib/components/recordingdisplay.svelte';
	import { onMount } from 'svelte';

	let mediaRecorder: MediaRecorder;
	let audio: HTMLMediaElement;
	let currentInputDeviceId: string | undefined;
	let currentOutputDeviceId: string | undefined;
	let chunks: Blob[] = [];
	let returnedAudio: string | undefined;
	let isRecording: boolean;
	let acceptedPermissions = false;

	const sendRecording = async () => {
		const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
		const formData = new FormData();
		formData.append('audio', blob);

		const response = await fetch('/record', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			console.log('Recording sent successfully');
		} else {
			console.error('Error sending recording');
		}

		const reader = response?.body?.getReader();
		const decoder = new TextDecoder('utf-8');
		if (reader) {
			const { value } = await reader.read();
			console.log(decoder.decode(value));
			returnedAudio = decoder.decode(value);
		}

		chunks = [];
	};

	const getInputDevices = async () => {
		const devices = await navigator.mediaDevices.enumerateDevices();
		return devices.filter((device) => device.kind === 'audioinput');
	};

	const getOutputDevices = async () => {
		const devices = await navigator.mediaDevices.enumerateDevices();
		return devices.filter((device) => device.kind === 'audiooutput');
	};

	const startRecording = async () => {
		mediaRecorder.start();
		isRecording = true;

		mediaRecorder.addEventListener('dataavailable', (event) => {
			if (event.data.size > 0) {
				const audioURL = URL.createObjectURL(event.data);
				audio.src = audioURL;
				chunks.push(event.data);
				console.info('Recording chunk added');
			}
		});
	};

	const stopRecording = () => {
		mediaRecorder.stop();
		isRecording = false;
	};

	const updateSelectedInputDevice = async (e: unknown) => {
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: {
				// @ts-expect-error - e.target is valid
				deviceId: e.target[e.target.selectedIndex].value,
				echoCancellation: false,
				noiseSuppression: true,
				autoGainControl: true,
				sampleRate: 96000,
				channelCount: 2,
				sampleSize: 24,
				latency: 0.01
			}
		});
		// @ts-expect-error - e.target is valid
		currentInputDeviceId = e.target[e.target.selectedIndex].value;
		mediaRecorder = new MediaRecorder(stream);
	};

	const updateSelectedOutputDevice = async (e: unknown) => {
		// @ts-expect-error - e.target is valid
		currentOutputDeviceId = e.target[e.target.selectedIndex].value;
		// @ts-expect-error - Experimental API
		audio.setSinkId(currentOutputDeviceId);
	};

	onMount(async () => {
		console.log('Hello from the record page!');

		const stream = await navigator.mediaDevices.getUserMedia({
			audio: {
				echoCancellation: false,
				noiseSuppression: true,
				autoGainControl: true,
				sampleRate: 96000,
				channelCount: 2,
				sampleSize: 24,
				latency: 0.01
			}
		});

		currentInputDeviceId = stream.getAudioTracks()[0].getSettings().deviceId;
		mediaRecorder = new MediaRecorder(stream);

		acceptedPermissions = true;
	});
</script>

<svelte:head>
	<title>{isRecording ? 'Recording...' : 'Record'}</title>
</svelte:head>
<main>
	<header>
		<a href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-arrow-left"
				><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg
			>
		</a>
		<h1>Record</h1>
	</header>
	<section>
		<div class="timeline">
			<Recordingdisplay
				audio="audio"
			/>
		</div>
		<div class="timeremaining">
			<h2>Time remaining 00:00</h2>
		</div>
	</section>
	<footer>
		<div class="audio-controls">controls</div>
		<div class="record-button">
			{#if isRecording}
				<button on:click={stopRecording}>Stop</button>
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
		/* justify-content: space-between; */
		padding-top: 1rem;
		padding-bottom: 4rem;
		margin: 0 1rem;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: start;

		height: auto;
	}
	header h1 {
		height: auto;
		margin: 0;
	}
	header a {
		margin-right: 0.5rem;
		color: black;
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
