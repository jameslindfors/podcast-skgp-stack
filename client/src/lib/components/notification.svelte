<script lang="ts">
	type Notification = {
		id: number;
		title: string;
		body: string;
		date: Date;
		read: boolean;
	};

	export let notification: Notification;
</script>

<section>
	<h1>{notification.title}</h1>
	<p>{notification.body}</p>
	<p>{notification.date}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 1rem;
	}
	h1 {
		margin: 0;
		padding: 0;
	}
	p {
		margin: 0;
		padding: 0;
	}
</style>
