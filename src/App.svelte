<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
  import { store } from "./module/stores.js";
  import { IntroPage, Youtube, Loading, Header } from "./components/index.js";

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
