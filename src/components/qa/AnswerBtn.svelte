<script>
  import { Button } from "sveltestrap";

  const onClick = () => {
    console.log("Answer Btn");
  };
</script>

<style>

</style>

<Button on:click={onClick} color={'info'} block class="answerBtn">정답</Button>
