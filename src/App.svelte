<script>
	import Youtube from "./Youtube.svelte";
	let player1;
</script>

<button on:click={() => {player1.playVideo()}}>재생</button>

<Youtube videoId="-sVo6NWwK_o" onStageChange={(event) => {event}} bind:this={player1}/>