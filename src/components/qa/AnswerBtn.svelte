<script>
  import { Button } from "sveltestrap";
  import { indexStore, countStore } from "@/module/stores.js";

  const onClick = () => {
    indexStore.update(value => value + 1);

    console.log($indexStore, $countStore);
    if ($indexStore == $countStore) console.log("finish");
  };
</script>

<style>

</style>

<Button on:click={onClick} color={'info'} block class="answerBtn">정답</Button>
