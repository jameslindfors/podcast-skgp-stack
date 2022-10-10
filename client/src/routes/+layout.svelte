<script>
	import { createClient, setContextClient } from '@urql/svelte';

	const client = createClient({
		url: 'https://project-water-circuit.live/graphql',
		fetchOptions: {
			mode: 'no-cors'
		}
	});

	setContextClient(client);
</script>

<main>
	<slot />
</main>
