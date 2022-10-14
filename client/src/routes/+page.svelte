<script lang="ts">
	// import { gql, queryStore, getContextClient } from '@urql/svelte';
	import Countdown from '$lib/components/countdown.svelte';
	import Cardstack from '$lib/components/cardstack.svelte';
	import RecordButton from '$lib/components/recordbutton.svelte';

	// let id = 1;
	// const user = queryStore({
	// 	client: getContextClient(),
	// 	query: gql`
	// 		query ($id: ID!) {
	// 			user(id: $id) {
	// 				id
	// 				username
	// 				post_allowed
	// 			}
	// 		}
	// 	`,
	// 	variables: { id }
	// });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<main>
	<nav>
		<a href="/profile">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="42"
				height="42"
				viewBox="0 0 42 42"
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
		<RecordButton />
	</footer>
	<span class="controls">controls</span>
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
		/* background-color: #eef6fa; */
		color: rgb(58, 56, 56);
		font-family: basic-sans, sans-serif;
	}
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 1rem;
		padding-bottom: 4rem;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		padding-right: 1rem;
		margin: 0;
		height: 5%;
	}
	nav a {
		text-decoration: none;
		color: rgb(58, 56, 56);
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	footer {
		display: flex;
		justify-content: center;
		margin-bottom: 3rem;
	}
	.controls {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
