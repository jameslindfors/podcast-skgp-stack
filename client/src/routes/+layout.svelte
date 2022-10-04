<script>
	import { createClient, setContextClient } from '@urql/svelte';

	const client = createClient({
		url: 'http://localhost:4000/graphql'
	});

	setContextClient(client);
</script>

<main>
	<slot />
</main>
