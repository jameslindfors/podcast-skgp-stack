<script lang="ts">
	import { gql, queryStore, getContextClient } from '@urql/svelte';
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
		<a href="/profile">Profile</a>
	</nav>
	<section>
		<div>
			<Countdown />
			<span>left to post</span>
		</div>

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
		background-color: #FAFAFA;
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
	}
	nav a {
		text-decoration: none;
		color: #c34949;
	}
	nav a:hover {
		text-decoration: underline;
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