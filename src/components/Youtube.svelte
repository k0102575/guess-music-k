<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { store } from "../module/stores.js";
  let player;
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
      setTimeout(stopVideo, 1000);
    }
    dispatch("StateChange", data);
  }

  function stopVideo() {
    player.stopVideo();
    player.clearVideo();
  }

  export function playVideo() {
    player.playVideo();
    player.seekTo(0, true);
  }

  export function createPlayer() {
    let { music, index } = $store;
    let videoId = music[index].videoId;
    let answer = music[index].answer;

    player = new YT.Player(divId, {
      height: "500",
      width: "500",
      videoId: videoId,
      events: {
        onStateChange: onPlayerStateChange
      }
    });

    store.update(value => {
      value.answer = answer;
      return value;
    });
  }

  export function destroyPlayer() {
    player.destroy();
  }
</script>

<div class="yt-component">
  <div id={divId} />
</div>
