<script>
  import { Input, Label } from "sveltestrap";

  let singer = "";

  const onChange = () => {};
</script>

<style>

</style>

<Label for="singerInput">가수</Label>
<Input
  type="text"
  name="singer"
  id="singerInput"
  placeholder="가수"
  on:change={onChange}
  value={singer} />
