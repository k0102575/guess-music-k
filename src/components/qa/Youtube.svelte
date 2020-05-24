<script>
  import { createEventDispatcher, onMount } from "svelte";
  import {
    indexStore,
    musicStore,
    answerStore,
    playerStore,
    divIdStore
  } from "@/module/stores.js";
  import { createPlayer, getVideoId } from "@/module/Module.svelte";

  divIdStore.update(
    value => "player_" + parseInt(Math.random() * 100000).toString()
  );

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
      playerStore.update(player => {
        return createPlayer($divIdStore, getVideoId($musicStore, $indexStore));
      });
    };
  });

  function isMyScriptLoaded(url = "") {
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length; i--; ) {
      if (scripts[i].src == url) return true;
    }
    return false;
  }
</script>

<style>
  .yt-component {
    height: 0px;
    width: 0px;
  }
</style>

<div class="yt-component">
  <div id={$divIdStore} />
</div>
