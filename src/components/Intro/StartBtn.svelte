<script>
  import { isStartStore } from "@/module/stores.js";
  import { Button } from "sveltestrap";
  const onClick = () => {
    isStartStore.update(value => !value);
  };
</script>

<Button on:click={onClick} color={'success'} block class="startBtn">
  시작
</Button>
