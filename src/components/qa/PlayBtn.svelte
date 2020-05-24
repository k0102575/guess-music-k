<script>
  import { playerStore } from "@/module/stores.js";
  import { playVideo } from "@/module/Module.svelte";
  import { Button } from "sveltestrap";

  const onClick = () => {
    playVideo($playerStore);
  };
</script>

<style>

</style>

<Button on:click={onClick} color={'primary'} size="lg" class="playBtn">
  재생
</Button>
