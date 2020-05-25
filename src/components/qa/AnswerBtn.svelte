<script>
  import { createEventDispatcher } from "svelte";
  import { Button } from "sveltestrap";

  const dispatch = createEventDispatcher();

  const onClick = () => {
    dispatch("answer");
  };
</script>

<style>

</style>

<Button on:click={onClick} color={'info'} block class="answerBtn">정답</Button>
