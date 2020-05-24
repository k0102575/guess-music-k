<script>
  import { createEventDispatcher, onMount } from "svelte";
  import {
    indexStore,
    musicStore,
    answerStore,
    playerStore
  } from "@/module/stores.js";
  let divId = "player_" + parseInt(Math.random() * 100000).toString();
  const dispatch = createEventDispatcher();

  onMount(() => {
    let ytTagUrl = "https://www.youtube.com/iframe_api";
    if (!isMyScriptLoaded(ytTagUrl)) {
      var tag = document.createElement("script");
      tag.src = ytTagUrl;
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    window.onYouTubeIframeAPIReady = function() {
      window.dispatchEvent(new Event("YouTubeIframeAPIReady"));
      createPlayer();
    };
  });

  function isMyScriptLoaded(url = "") {
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length; i--; ) {
      if (scripts[i].src == url) return true;
    }
    return false;
  }

  function onPlayerStateChange({ data }) {
    if (data === 1) {
      // TODO 난이도 시간초 처리
      setTimeout(stopVideo, 2000);
    }
    dispatch("StateChange", data);
  }

  function createPlayer() {
    let videoId = $musicStore[$indexStore].videoId;
    let answer = $musicStore[$indexStore].answer;

    playerStore.update(e => {
      return new YT.Player(divId, {
        height: "0",
        width: "0",
        videoId: videoId,
        events: {
          onStateChange: onPlayerStateChange
        }
      });
    });

    answerStore.update(value => answer);
  }

  function stopVideo() {
    $playerStore.stopVideo();
    $playerStore.clearVideo();
  }

  function playVideo() {
    $playerStore.playVideo();
    $playerStore.seekTo(0, true);
  }

  function destroyPlayer() {
    $playerStore.destroy();
  }
</script>

<style>
  .yt-component {
    height: 0px;
    width: 0px;
  }
</style>

<div class="yt-component">
  <div id={divId} />
</div>
