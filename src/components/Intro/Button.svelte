<script>
  import { isStartStore } from "@/module/stores.js";
  const startClick = () => {
    isStartStore.update(value => !value);
  };
</script>

<button on:click={startClick}>시작</button>
