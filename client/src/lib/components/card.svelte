<script lang="ts">
	type CardType = {
		title: string;
		caption: string;
		profile: string;
		audio: string;
		author: string;
		bg: string;
	};
	export let card: CardType;

	const play = () => {
		const audio = new Audio(card.audio);
		audio.play();
	};

	let playing = false;
</script>

<li style={`background-color: ${card.bg}`}>
	<h2 class="title">{card.title}</h2>
	<div class="player">
		{#if !playing}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="42"
				height="42"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3" /></svg
			>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="42"
				height="42"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-pause"
				><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg
			>
		{/if}
		<audio>
			<source src={card.audio} type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	</div>

	<div class="lower">
		<div class="text-container">
			<p>{card.author}</p>
			<caption>
				<span
					>{card.caption}
					<img src={card.profile} alt="profile" />
				</span>
			</caption>
		</div>
	</div>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		height: 100%;
		width: 100%;

		overflow: hidden;

		background: #00b4db;
		background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
		background: linear-gradient(to right, #0083b0, #00b4db);
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		text-align: left;
	}
	caption {
		font-weight: 400;
		margin: 0;
		margin-right: 0.2rem;
		font-size: medium;
		text-align: left;
	}
	caption span {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	img {
		width: 4rem;
		height: 4rem;
		object-fit: inherit;
		border-radius: 10rem;
		box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0.88);
	}
	.lower {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		margin: 1rem 1rem;
	}
	.text-container {
		display: flex;
		flex-direction: column;

		width: 100%;
		margin: 0;
		padding: 0;
	}
	.text-container p {
		margin: 0;
		padding-bottom: 0.2rem;
		text-align: left;
		color: rgb(197, 197, 197);
	}
</style>
