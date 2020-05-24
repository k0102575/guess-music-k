<script>
  import { FormGroup } from "sveltestrap";

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
    display: flex;
    flex-direction: column;
  }
</style>

<div class="Qa-box">
  <Youtube />
  <PlayBtn />
  <FormGroup>
    <SingerInput />
  </FormGroup>
  <FormGroup>
    <SongInput />
  </FormGroup>
  <AnswerBtn />
</div>
