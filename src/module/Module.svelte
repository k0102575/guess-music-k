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
    return new Promise((resolve, reject) => {
      player.destroy();
      resolve();
    });
  }

  export function getVideoId($musicStore, $indexStore) {
    return $musicStore[$indexStore].videoId;
  }

  export function getAnswer($musicStore, $indexStore) {
    return new Promise((resolve, reject) => {
      resolve($musicStore[$indexStore].answer);
    });
  }

  export function indexUpdate(indexStore) {
    return new Promise((resolve, reject) => {
      indexStore.update(value => value + 1);
      resolve();
    });
  }

  export function checkAnswer(answer, singer, song, scoreStore) {
    return new Promise((resolve, reject) => {
      const [answerSinger, answerSong] = trimAndLowerCase(answer).split("-");
      const inputAnswer = trimAndLowerCase(singer);
      const inputSong = trimAndLowerCase(song);

      if (answerSinger == inputAnswer) scoreStore.update(value => value + 1);
      if (answerSong == inputSong) scoreStore.update(value => value + 1);

      resolve();
    });
  }

  function trimAndLowerCase(text) {
    return text.replace(/ /gi, "").toLowerCase();
  }
</script>
