<script>
  import { playerStore } from "@/module/stores.js";

  const onClick = () => {
    $playerStore.playVideo();
    $playerStore.seekTo(0, true);
  };
</script>

<style>

</style>

<button on:click={onClick}>재생</button>
