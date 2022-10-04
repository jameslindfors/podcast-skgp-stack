<script lang="ts">
	import { onMount } from 'svelte';

	let mediaRecorder: MediaRecorder;
	let audio: HTMLMediaElement;
	let currentInputDeviceId: string | undefined;
	let currentOutputDeviceId: string | undefined;
	let chunks: Blob[] = [];
	let returnedAudio: string | undefined;
	let isRecording: boolean;

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
	<title>{isRecording ? 'Recording...' : 'Record'}</title>
</svelte:head>

<div>
	<button on:click={startRecording}>Start Recording</button>
	<button on:click={stopRecording}>Stop Recording</button>
	<button on:click={sendRecording}>Send Recording</button>

	<br />

	{#if isRecording}
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
		<select on:change={updateSelectedInputDevice} disabled={isRecording}>
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
		<select on:change={updateSelectedOutputDevice} disabled={isRecording}>
			{#each devices as device}
				<option value={device.deviceId} selected={device.deviceId == currentOutputDeviceId}
					>{device.label}</option
				>
			{/each}
		</select>
	{/await}

	<br />

	{#if returnedAudio}
		<aside>
			<p>Recorded Audio Passed Through Server</p>
			<audio controls controlslist="nodownload">
				<source src={returnedAudio} type="audio/ogg; codecs=opus" />
				Audio not supported in your browser.
			</audio>
		</aside>
	{/if}
</div>
