<script lang="ts">
	let recording = false;
</script>

<button name="recordlink">
	<span class="inner-circle">
		<span class={!recording ? 'dot' : 'square'} />
	</span>
</button>

<style>
	button {
		border: none;
		border-radius: 50%;
		height: 70px;
		width: 70px;
		padding: 0.3rem;
		outline: none;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		background-color: rgb(222, 27, 27);
	}
	button:hover {
		background-color: #c34949;
	}
	.inner-circle {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #f7f7f7;
	}
	.dot {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: rgb(222, 27, 27);
	}
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.4rem;
		height: 2.4rem;
		background-color: rgb(222, 27, 27);
	}
</style>
