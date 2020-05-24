<script>
  import { Button } from "sveltestrap";
  import {
    indexStore,
    musicStore,
    countStore,
    divIdStore,
    playerStore,
    isEndStore
  } from "@/module/stores.js";
  import {
    createPlayer,
    destroyPlayer,
    getVideoId,
    indexUpdate,
    getAnwser
  } from "@/module/Module.svelte";

  const onClick = async () => {
    console.log(getAnwser($musicStore, $indexStore));

    await destroyPlayer($playerStore);
    await indexUpdate(indexStore);

    if ($indexStore == $countStore) {
      isEndStore.update(value => true);
      return;
    }

    playerStore.update(player => {
      return createPlayer($divIdStore, getVideoId($musicStore, $indexStore));
    });
  };
</script>

<style>

</style>

<Button on:click={onClick} color={'info'} block class="answerBtn">정답</Button>
