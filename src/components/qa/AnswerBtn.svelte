<script>
  import { Button } from "sveltestrap";
  import {
    indexStore,
    musicStore,
    countStore,
    divIdStore,
    playerStore
  } from "@/module/stores.js";
  import {
    createPlayer,
    destroyPlayer,
    getVideoId,
    indexUpdate
  } from "@/module/Module.svelte";

  const onClick = async () => {
    await destroyPlayer($playerStore);
    await indexUpdate(indexStore);

    if ($indexStore == $countStore) {
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
