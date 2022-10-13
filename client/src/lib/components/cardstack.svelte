<script lang="ts">
	import Card from './card.svelte';

	export let stack = [1];
    
</script>

<ul class="media">
	{#each stack as card}
		<Card {card}/>
	{/each}
</ul>

<style>

</style>
