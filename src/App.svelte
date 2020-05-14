<script>
	import Youtube from "./Youtube.svelte";
	let player;

	

</script>

<button on:click={() => {player.createPlayer("-sVo6NWwK_o")}}>생성</button>
<button on:click={() => {player.playVideo()}}>재생</button>
<button on:click={() => {player.destroyPlayer()}}>삭제</button>

<Youtube bind:this={player}/>