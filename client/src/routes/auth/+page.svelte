<script land="ts">
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/login" use:enhance>
	<label for="email">Username: </label>
	<input type="email" name="email" id="email" />
	<button type="submit">Login</button>
</form>
