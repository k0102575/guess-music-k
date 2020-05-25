<script>
  import { FormGroup, Input, Label } from "sveltestrap";
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import { Youtube, PlayBtn, AnswerBtn } from "./index.js";
  import {
    indexStore,
    musicStore,
    countStore,
    divIdStore,
    playerStore,
    isEndStore,
    scoreStore
  } from "@/module/stores.js";
  import {
    createPlayer,
    destroyPlayer,
    getVideoId,
    indexUpdate,
    getAnswer,
    checkAnswer
  } from "@/module/Module.svelte";

  let singer = "";
  let song = "";
  let index = 1;
  let n;
  indexStore.subscribe(value => (index = value + 1));

  const handleAnswer = async event => {
    //if (singer == "" || song == "") {
    //  notifier.danger("가수 및 노래를 입력해주세요", 1500);
    //}

    const answer = await getAnswer($musicStore, $indexStore);
    await checkAnswer(answer, singer, song, scoreStore);

    await destroyPlayer($playerStore);
    await indexUpdate(indexStore);
    if ($indexStore == $countStore) {
      isEndStore.update(value => true);
      return;
    }
    playerStore.update(player => {
      return createPlayer($divIdStore, getVideoId($musicStore, $indexStore));
    });

    singer = "";
    song = "";
  };
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

<NotificationDisplay bind:this={n} />

<div class="Qa-box">
  <Youtube />
  <p>{index} / {$countStore}</p>
  <PlayBtn />
  <FormGroup>
    <Label for="singerInput">가수</Label>
    <Input
      type="text"
      id="singerInput"
      placeholder="가수"
      bind:value={singer} />
  </FormGroup>
  <FormGroup>
    <Label for="songInput">노래</Label>
    <Input type="text" id="songInput" placeholder="가수" bind:value={song} />
  </FormGroup>
  <AnswerBtn on:answer={handleAnswer} />
</div>
