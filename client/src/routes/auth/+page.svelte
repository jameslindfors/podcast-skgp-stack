<script land="ts">
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/login" use:enhance>
	<label for="email">Username: </label>
	<input type="email" name="email" id="email" />
	<button type="submit">Login</button>
</form>
<a href=" https://project-water-circuit.live/auth/twitch">Login With Twitch</a>
<a href=" https://project-water-circuit.live/auth/spotify">Login With Spotify</a>
<a href=" https://project-water-circuit.liveauth/twitter">Login With Twitter</a>
<a href=" https://project-water-circuit.live/auth/instagram">Login With Instagram</a>
