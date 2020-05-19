<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";

  import Youtube from "./Youtube.svelte";
  import Loading from "./Loading.svelte";
  import { store } from "./stores.js";

  let player;
  let idx;
  let isLoading = true;
  store.subscribe(i => (idx = i));

  onMount(() => {
    var urly = "/question.json";
    fetch(urly)
      .then(res => res.json())
      .then(data => {
        store.update(value => {
          value.music = data.music;
          return value;
        });
      })
      .then(() => {
        isLoading = false;
      });
  });
</script>

<button
  on:click={() => {
    player.createPlayer();
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
</button>

<div>{$store.index}</div>
<div>{$store.answer}</div>

{#if isLoading}
  <Loading />
{:else}
  <Youtube bind:this={player} />
{/if}
