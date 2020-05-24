<script>
  import { onMount } from "svelte";
  import {
    indexStore,
    musicStore,
    isStartStore,
    countStore,
    isEndStore
  } from "@/module/stores.js";
  import {
    IntroPage,
    QaPage,
    EndPage,
    Loading,
    Header
  } from "@/components/index.js";
  import { Container } from "sveltestrap";

  let isLoading = true;
  let isStart = $isStartStore;
  let isEnd = false;
  let url = "/question.json";

  const getMusic = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const music = data.music;
        musicStore.update(value => music);
        countStore.update(value => music.length);
      })
      .then(() => {
        //setTimeout(() => {
        isLoading = false;
        //}, 3000);
      });
  };

  onMount(() => {
    getMusic();
  });

  isStartStore.subscribe(value => {
    isStart = value;
  });

  isEndStore.subscribe(value => {
    isEnd = value;
  });
</script>

<style>

</style>

<Container class="container">

  <Header />

  {#if isStart}
    {#if isLoading}
      <Loading />
    {:else if isEnd}
      <EndPage />
    {:else}
      <QaPage />
    {/if}
  {:else}
    <IntroPage />
  {/if}

</Container>
