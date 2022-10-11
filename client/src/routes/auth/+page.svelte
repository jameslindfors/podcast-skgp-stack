<script land="ts">
	import { enhance } from '$app/forms';

	import InstagramIcon from '$lib/assets/icons8-instagram-50.svelte';
	import SpotifyIcon from '$lib/assets/icons8-spotify-50.svelte';
	import TwitchIcon from '$lib/assets/icons8-twitch-50.svelte';

	import sendicon from '$lib/assets/icons8-send-50.png';

	/**
	 * @type {any[]}
	 */
	let providers = [
		{
			provider: 'instagram',
			name: 'Instagram',
			icon: InstagramIcon,
			color: '#C13584',
			auth_url: 'https://api.project-water-circuit.live/auth/instagram'
		},
		{
			provider: 'spotify',
			name: 'Spotify',
			icon: SpotifyIcon,
			color: '#1DB954',
			auth_url: 'https://api.project-water-circuit.live/auth/spotify'
		},
		{
			provider: 'twitch',
			name: 'Twitch',
			icon: TwitchIcon,
			color: '#9146FF',
			auth_url: 'https://api.project-water-circuit.live/auth/twitch'
		}
	];
	let auth = { email: '' };
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Authentication page" />
</svelte:head>

<section>
	<div class="is-flex is-flex-direction-column m-4">
		<h1 class="has-text-weight-semibold has-text-centered is-size-3">Welcome, login here.</h1>
		{#each providers as Provider}
			<a
				href={Provider.auth_url}
				class="button is-medium provider"
				style={`background-color: ${Provider.color}`}
			>
				<span class="is-flex is-align-items-center ">
					<Provider.icon />
					<span class="pl-2 has-weight-bold">Login with {Provider.name}</span>
				</span>
			</a>
		{/each}
		<span class="divider" />
		<form method="POST" action="?/login" use:enhance>
			<span class="form-row">
				<span class="field is-large">
					<label for="email" hidden />
					<input
						type="email"
						name="email"
						id="email"
						placeholder="email@email.com"
						bind:value={auth.email}
					/>
				</span>
				<button type="submit">
					<img src={sendicon} alt="send" />
				</button>
			</span>
		</form>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.divider {
		border-bottom: 2px solid #ccc;
		margin: 1rem 0;
	}
	.provider {
		border-radius: 0.2rem;
		color: #eee;
		font-weight: 500;
		margin: 0.3rem 0;
	}
	.form-row {
		display: flex;
		align-items: center;
	}
	.form-row > button {
		position: relative;
		z-index: 1;
		height: 100%;
		background: none;
	}
	.form-row > .field {
		flex: 1;
	}
	.form-row > .field > input {
		padding: 1.2rem;
		width: 100%;
		border: 1px solid #ccc;
		font-size: large;
	}
</style>
