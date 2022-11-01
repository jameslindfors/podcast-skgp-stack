<svelte:head>
	<title>Notfication</title>
	<meta name="description" content="Notification page" />
</svelte:head>

<header>
	<a href="/">
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
			class="feather feather-arrow-left"
			><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg
		>
	</a>
</header>
<slot />

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		height: auto;
		width: auto;
		padding: 1rem 0;
		margin: 0 1rem;
	}
	header a {
		margin-right: 0.5rem;
		color: black;
	}
</style>
