<script>
  import { musicStore, scoreStore } from "@/module/stores.js";
</script>

<style>
  .End-box {
    padding: 50px;
    height: 90%;
    display: flex;
    flex-direction: column;
  }
</style>

<div class="End-box">
  <p>총 {$scoreStore}점 입니다.</p>

  <ul>
    {#each $musicStore as music}
      <li>
        <span>{music.answer}</span>
      </li>
    {/each}
  </ul>
</div>
