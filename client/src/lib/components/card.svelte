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
</script>

<li style={`background-color: ${card.bg}`}>
	<h2 class="title">{card.title}</h2>
	<div class="player">
		<audio controls>
			<source src={card.audio} type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	</div>

	<div class="lower">
		<caption>
			<span>{card.caption}</span>
		</caption>
		<span>
			<img src={card.profile} alt="profile" />
		</span>
	</div>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: auto;
		width: auto;

		padding: 1.5rem;

		overflow: hidden;

		border-radius: 5%;

		/* background: #00416a;
		background: -webkit-linear-gradient(to bottom, #e4e5e6, #00416a);
		background: linear-gradient(to bottom, #e4e5e6, #00416a); */
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0.2rem 0;
		width: auto;
		text-align: left;
		margin-bottom: 6rem;
	}
	audio {
		width: 100%;
		margin: 1rem 0;
	}
	caption {
		width: 100%;
		font-weight: 400;
		margin: 0;
		margin-right: 0.2rem;
		align-self: flex-end;
		font-size: medium;
		text-align: left;
	}
	span {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 4rem;
		height: 4rem;
		object-fit: inherit;
		border-radius: 10rem;
	}
	.lower {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		/* margin: 0.3rem 0; */
		margin-top: 6rem;
		padding: 0;
	}
</style>
