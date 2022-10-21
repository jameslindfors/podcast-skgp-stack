<section>
    <div class="header">
        <img src="" alt="user profile"/>
        <h1>username</h1>
        <span class="follow">
            <p>followers</p>
            <p>following</p>
        </span>
    </div>

	<div class="settings">
		<p>change profile pic</p>
		<p>change name</p>
		<p>logout</p>
        <span class="divider">
        </span>
		<aside>
			<p>privacy and tos</p>
			<p>support</p>
		</aside>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
        height: 100%;
	}
    .header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
            "img name"
            "img follow ";
        width: 100%;
        /* height: 100%; */
        padding: 1rem;
    }
    img {
        grid-area: img;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
    }
    h1 {
        grid-area: name;
        align-self: center;
        justify-self: center;
    }
    .follow {
        grid-area: follow;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 1rem;
    }
    .settings {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1rem;

    }
    .settings p {
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: center;

    }
    .divider {
        width: 100%;
        height: 1px;
        background-color: black;
        margin: 1rem 0;
    }
    aside {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
    }
</style>
