<script lang="ts">
	import { gql, queryStore, getContextClient } from '@urql/svelte';

	let id = 1;
	const user = queryStore({
		client: getContextClient(),
		query: gql`
			query ($id: ID!) {
				user(id: $id) {
					id
					username
					post_allowed
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

<h1>Podcast</h1>
<a href="/record">Record</a>

{#if $user.fetching}
	<p>loading...</p>
{:else if $user.error}
	<p>oh no... {$user.error.message}</p>
{:else}
	<p>user: {$user.data.user.username}</p>
	{#if $user.data.user.post_allowed}
		<p>post allowed</p>
	{:else}
		<p>post not allowed</p>
	{/if}
{/if}
