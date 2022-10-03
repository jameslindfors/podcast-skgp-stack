<script lang="ts">
	import { onMount } from 'svelte';

	let mediaRecorder: MediaRecorder;
	let audio: HTMLMediaElement;
	let currentInputDeviceId: string | undefined;
	let currentOutputDeviceId: string | undefined;
	let recording: boolean;

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
		recording = true;

		mediaRecorder.addEventListener('dataavailable', (event) => {
			if (event.data.size > 0) {
				const audioURL = URL.createObjectURL(event.data);
				audio.src = audioURL;
			}
		});
	};

	const stopRecording = () => {
		mediaRecorder.stop();
		recording = false;
	};

	const updateSelectedInputDevice = async (e: unknown) => {
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: {
				// @ts-expect-error - e.target is valid
				deviceId: e.target[e.target.selectedIndex].value
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
			audio: true,
			video: false
		});

		currentInputDeviceId = stream.getAudioTracks()[0].getSettings().deviceId;
		mediaRecorder = new MediaRecorder(stream);
	});
</script>

<svelte:head>
	<title>{recording ? 'Recording...' : 'Record'}</title>
</svelte:head>

<div>
	<button on:click={startRecording}>Start Recording</button>
	<button on:click={stopRecording}>Stop Recording</button>

	<br />

	{#if recording}
		<p>Recording...</p>
	{:else}
		<p>Not recording</p>
	{/if}

	<br />

	<audio bind:this={audio} controls controlslist="nodownload">
		Audio not supported in your browser.
	</audio>

	<br />

	{#await getInputDevices()}
		<p>loading...</p>
	{:then devices}
		<label for="input-device">Input Device:</label>
		<select on:change={updateSelectedInputDevice} disabled={recording}>
			{#each devices as device}
				<option value={device.deviceId} selected={device.deviceId == currentInputDeviceId}
					>{device.label}</option
				>
			{/each}
		</select>
	{/await}

	<br />

	{#await getOutputDevices()}
		<p>loading...</p>
	{:then devices}
		<label for="output-device">Output Device:</label>
		<select on:change={updateSelectedOutputDevice} disabled={recording}>
			{#each devices as device}
				<option value={device.deviceId} selected={device.deviceId == currentOutputDeviceId}
					>{device.label}</option
				>
			{/each}
		</select>
	{/await}
</div>
