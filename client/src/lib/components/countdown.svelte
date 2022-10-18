<script lang="ts">
	import { tick } from 'svelte';
	import { onMount } from 'svelte';

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

	let intervalId: string | number | NodeJS.Timeout;
	let timeoutId: string | number | NodeJS.Timeout;

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

<span>{formattedTime} left to post</span>

<style>
	span {
		margin-top: 2rem;
		padding-top: 0;
		font-weight: bold;
		font-size: 1.2rem;
		text-shadow: 0 0 0.5rem rgba(91, 91, 91, 0.2);
		text-rendering: optimizeLegibility;
	}
</style>
