<script>
  import Description from "./Description.svelte";
  import StartBtn from "./StartBtn.svelte";
</script>

<style>
  .Intro-box {
    padding: 50px;
    height: 90%;
    display: flex;
    flex-direction: column;
  }
</style>

<div class="Intro-box">
  <Description />
  <StartBtn />
</div>
