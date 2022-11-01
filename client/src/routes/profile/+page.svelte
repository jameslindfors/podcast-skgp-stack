<section>
	<div class="header">
		<img
			src="https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
			alt="user profile"
		/>
		<h1>jameslindfors</h1>
		<span class="follow-container">
			<span class="follow-item">
				<span class="follow-count">250</span>
				<span class="follow-label">following</span>
			</span>
			<span class="follow-item">
				<span class="follow-count">14k</span>
				<span class="follow-label">followers</span>
			</span>
		</span>
	</div>
	<div class="user-post">No post</div>

	<div class="settings">
		<button>📷 Change Profile Pic</button>
		<button>📝 Change Username</button>
		<button>👋 Logout</button>
		<span class="divider" />
		<aside>
			<p>Privacy & TOS</p>
			<p>Support</p>
			<p>FAQ</p>
		</aside>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		margin: 0;
		margin-bottom: 1rem;
		padding: 0;
	}

	.header img {
		width: 9rem;
		height: 9rem;
		border-radius: 50%;
		margin: 1rem;
	}

	.header h1 {
		font-size: 1.8rem;
		font-weight: 500;
		margin: 0;
		margin-bottom: 0.4rem;
	}

	.header span {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.follow-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.follow-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 1rem;
	}

	.follow-count {
		font-size: 1.5rem;
		font-weight: 500;
		margin: 0;
	}

	.follow-label {
		font-size: 1rem;
		font-weight: 500;
		margin: 0;
	}

	.user-post {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px dashed #333;
		border-radius: 0.5rem;
		width: 90%;
		margin: 1rem;
	}

	.settings {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 0;
	}

	.settings button {
		width: 90%;
		height: 3rem;
		border: none;
		border-radius: 0.5rem;
		color: #333;
		font-size: 1rem;
		font-weight: 500;
		margin: 0.5rem 0;
	}

	.settings span {
		height: 1px;
		width: 100%;
		background-color: #e0e0e0;
		margin-top: 1rem;
	}

	.settings aside {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		margin: 1.5rem 0;
	}

	.settings aside p {
		font-size: 1rem;
		font-weight: 500;
		margin: 0;
	}

	.settings aside p:not(:last-child) {
		margin-right: 2rem;
	}
</style>
