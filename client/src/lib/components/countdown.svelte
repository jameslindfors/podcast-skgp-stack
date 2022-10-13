<script lang="ts">
	import { tick } from 'svelte';
	import { onMount } from 'svelte';

	const timeSinceMidnight = () => {
		const now = new Date();
		const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
		return now.getTime() - midnight.getTime();
	};

	const timeUntilMidnight = () => {
		const now = new Date();
		const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
		return midnight.getTime() - now.getTime();
	};

	export let time = timeUntilMidnight();
	export let interval = 1000;
	export let format = (time: number) => {
		const hours = Math.floor(time / 1000 / 60 / 60);
		const minutes = Math.floor(time / 1000 / 60) % 60;
		const seconds = Math.floor(time / 1000) % 60;
		return `${hours} hours ${minutes} minutes ${seconds} seconds`;
	};

	let intervalId: unknown;
	let timeoutId: unknown;

	const start = () => {
		intervalId = setInterval(() => {
			time -= interval;
			tick();
		}, interval);
	};

	const stop = () => {
		clearInterval(intervalId);
		clearTimeout(timeoutId);
	};

	onMount(() => {
		start();
		timeoutId = setTimeout(() => {
			stop();
			tick();
		}, time);
	});

	$: if (time <= 0) {
		stop();
	}

	$: formattedTime = format(time);
</script>

{formattedTime}
