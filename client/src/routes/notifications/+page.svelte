<script lang="ts">
    type Notification = {
        id: number;
        title: string;
        body: string;
        date: Date;
        read: boolean;
    };

    import Notification from "$lib/components/notification.svelte";

    let notifications: Notification[] = [
        {
            id: 1,
            title: 'Notification 1',
            body: 'This is the first notification',
            date: new Date(),
            read: false,
        },
        {
            id: 2,
            title: 'Notification 2',
            body: 'This is the second notification',
            date: new Date(),
            read: false,
        },
        {
            id: 3,
            title: 'Notification 3',
            body: 'This is the third notification',
            date: new Date(),
            read: false,
        },
    ];
</script>

<section>
    <ul>
        {#each notifications as notification}
            <li>
                <Notification {notification}/>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }
</style>