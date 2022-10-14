<script>
</script>

<li>
	<h2 class="title">Wow listen to thissss!!!</h2>
	<div class="player">
		<audio controls>
			<source
				src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
				type="audio/mpeg"
			/>
			Your browser does not support the audio element.
		</audio>
	</div>

	<div class="lower">
		<caption>
			<span>LOL this was so embarassing I cannot believe that this happened you need to hear!!</span
			>
		</caption>
		<span>
			<img
				src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
				alt="profile"
			/>
		</span>
	</div>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		height: 100%;
		width: 100%;

		overflow: hidden;
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0.2rem 0;
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
