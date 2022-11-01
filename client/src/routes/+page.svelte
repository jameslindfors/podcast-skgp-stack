<script lang="ts">
	import Countdown from '$lib/components/countdown.svelte';
	import Cardstack from '$lib/components/cardstack.svelte';
	import RecordButton from '$lib/components/recordbutton.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<main>
	<nav>
		<span class="search-container">
			<button name="search">
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
					class="feather feather-search"
					><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
				>
			</button>
			<input type="text" name="search" id="search" placeholder="Search" />
		</span>
		<a href="/profile" name="profilelink">
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
				class="feather feather-user"
				><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg
			>
		</a>
	</nav>
	<section>
		<Countdown />
		<Cardstack />
	</section>

	<footer>
		<a href="/record">
			<RecordButton />
		</a>
	</footer>
	<span class="notifications">
		<a href="/notifications" name="notficationslink">
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
				class="feather feather-bell"
				><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path
					d="M13.73 21a2 2 0 0 1-3.46 0"
				/></svg
			>
		</a>
	</span>
</main>

<style>
	:global(body) {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;

		color: rgb(58, 56, 56);
		font-family: basic-sans, sans-serif;
		font-display: swap;
		overflow: hidden;
	}
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 1rem;
		padding-bottom: 4rem;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
	}
	.search-container {
		/* border: 1px solid #000; */
		border-radius: 1.3rem;
		padding: 0.2rem;
		width: 84%;
		height: 86%;
		display: flex;
		align-items: center;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
	}
	.search-container button {
		background: none;
		border: none;
		margin: 0 0.3rem;
		padding: 0;
	}
	.search-container button svg {
		color: rgba(58, 56, 56, 0.553);
	}
	.search-container input {
		border: none;
		width: 100%;
		height: 90%;
		border-radius: 1rem;
		outline: none;
		font-size: 1.2rem;
	}
	nav a {
		margin: 0;
		padding: 0;
		text-decoration: none;
		color: rgb(58, 56, 56);
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	footer {
		display: flex;
		justify-content: center;
		margin-top: 0.5rem;
		margin-bottom: 3rem;
	}
	footer a {
		text-decoration: none;
		margin: 0;
		padding: 0;
	}
	.notifications {
		position: absolute;
		bottom: 3rem;
		right: 3rem;
		padding-right: 1rem;
	}
	.notifications a {
		margin: 0;
		padding: 0;
		text-decoration: none;
		color: rgb(58, 56, 56);
	}
</style>
