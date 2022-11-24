<script lang="ts">
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	// export let data;
	let id = 1;

	const user = queryStore({
		client: getContextClient(),
		query: gql`
			query ($id: ID!) {
				user(id: $id) {
					id
					username
					profile_img
					post_allowed
					profile_identifier
					access_token
					expires
					refresh_token {
						user_id
						token
					}
				}
			}
		`,
		variables: { id }
	});
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
	<div>
		<a href="http://localhost:4000/auth/spotify">Login with spotify</a>
		{#if $user.fetching}
			<p>Loading...</p>
		{:else if $user.error}
			<p>Oh no... {$user.error.message}</p>
		{:else}
			<img src={$user.data.user.profile_img} alt="profile" width="150" height="150" />
			<h1>{$user.data.user.username}</h1>
		{/if}
	</div>
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
		background-color: blanchedalmond;
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
		background: none;
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
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	img {
		border-radius: 50%;
	}
</style>
