<script>
  import { playerStore } from "@/module/stores.js";
  import { Button } from "sveltestrap";

  const onClick = () => {
    $playerStore.playVideo();
    $playerStore.seekTo(0, true);
  };
</script>

<style>

</style>

<Button on:click={onClick} color={'primary'} size="lg" class="playBtn">
  재생
</Button>
