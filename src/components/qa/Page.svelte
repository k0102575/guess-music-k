<script>
  let player;

  import {
    Youtube,
    PlayBtn,
    SingerInput,
    SongInput,
    AnswerBtn
  } from "./index.js";
</script>

<style>
  .Qa-box {
    padding: 50px;
    height: 90%;
  }
</style>

<div class="Qa-box">
  <Youtube bind:this={player} />
  <PlayBtn {player} />
  <SingerInput />
  <SongInput />
  <AnswerBtn />
</div>
