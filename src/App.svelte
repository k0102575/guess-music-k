<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
  import { indexStore, musicStore, isStartStore } from "./module/stores.js";
  import { IntroPage, QaPage, Loading, Header } from "./components/index.js";

  let isLoading = true;
  let isStart = $isStartStore;
  let url = "/question.json";

  const getMusic = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        musicStore.update(value => data.music);
      })
      .then(() => {
        setTimeout(() => {
          isLoading = false;
        }, 3000);
      });
  };

  onMount(() => {
    getMusic();
  });

  isStartStore.subscribe(value => {
    isStart = value;
  });
</script>

<style>
  .container {
    height: 100%;
  }
</style>

<div class="container">

  <Header />

  {#if isStart}
    {#if isLoading}
      <Loading />
    {:else}
      <QaPage />
    {/if}
  {:else}
    <IntroPage />
  {/if}

</div>
