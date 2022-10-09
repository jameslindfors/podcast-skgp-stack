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

{#if $user?.data?.user.username}
	<h1>Welcome back, {$user.data.user.username}</h1>
{:else}
	<h1>Welcome, Guest!</h1>
{/if}

{#if $user?.data?.post_allowed}
	<a href="/record">Record</a>
{/if}

<a href="/auth">Login</a>