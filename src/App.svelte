<script>
  import Youtube from "./Youtube.svelte";
  import { store } from "./stores.js";
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
  let player;
  let videoIds = ["-sVo6NWwK_o", "hRJKGVJpHpA", "7gr7BK7B51g"];
  let idx;
  store.subscribe(i => (idx = i));

  onMount(() => {
    var urly = "/test.json";
    fetch(urly)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  });
</script>

<!--<button
  on:click={() => {
    player.createPlayer(videoIds[idx]);
  }}>
  생성
</button>
<button
  on:click={() => {
    player.playVideo();
  }}>
  재생
</button>
<button
  on:click={() => {
    player.destroyPlayer();
  }}>
  삭제
</button>-->

<Youtube bind:this={player} />
