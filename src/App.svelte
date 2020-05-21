<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
  import { index, music } from "./module/stores.js";
  import { IntroPage, Youtube, Loading, Header } from "./components/index.js";

  let player;
  let isLoading = true;
  let url = "/question.json";

  onMount(() => {
    getMusic();
  });

  function getMusic() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        music.update(value => data.music);
      })
      .then(() => {
        isLoading = false;
      });
  }
</script>

<style>
  .container {
    height: 100%;
  }
</style>

<div class="container">

  <Header />
  <IntroPage />

  {#if isLoading}
    <Loading />
  {:else}
    <Youtube bind:this={player} />
  {/if}

</div>
