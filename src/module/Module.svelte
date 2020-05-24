<script context="module">
  export function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      setTimeout(() => {
        let player = event.target;

        player.stopVideo();
        player.clearVideo();
      }, 2000);
    }
  }

  export function playVideo(player) {
    player.playVideo();
    player.seekTo(0, true);
  }

  export function createPlayer(divId, videoId) {
    return new YT.Player(divId, {
      height: "100",
      width: "100",
      videoId: videoId,
      events: {
        onStateChange: onPlayerStateChange
      }
    });
  }

  export function destroyPlayer(player) {
    player.destroy();
  }

  export function getVideoId($musicStore, $indexStore) {
    return $musicStore[$indexStore].videoId;
  }
</script>
