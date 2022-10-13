<script>
	import { createClient, setContextClient } from '@urql/svelte';

	// const client = createClient({
	// 	url: 'http://localhost:4000/graphql',
	// 	fetchOptions: {
	// 		mode: 'no-cors'
	// 	}
	// });

	// setContextClient(client);
</script>

<slot />
