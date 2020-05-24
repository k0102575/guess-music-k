<script>
  import { FormGroup } from "sveltestrap";

  import {
    Youtube,
    PlayBtn,
    SingerInput,
    SongInput,
    AnswerBtn
  } from "./index.js";

  import { indexStore, countStore } from "@/module/stores.js";

  let index = 1;

  indexStore.subscribe(value => (index = value + 1));
</script>

<style>
  .Qa-box {
    padding: 50px;
    height: 90%;
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: right;
  }
</style>

<div class="Qa-box">
  <Youtube />
  <p>{index} / {$countStore}</p>
  <PlayBtn />
  <FormGroup>
    <SingerInput />
  </FormGroup>
  <FormGroup>
    <SongInput />
  </FormGroup>
  <AnswerBtn />
</div>
