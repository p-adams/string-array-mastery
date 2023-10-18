<script lang="ts">
  import { problemSets } from "../main";

  export let current: { label: string; value: string };
</script>

<div>
  {#each problemSets?.array as problem}
    <div
      class={`problem ${current?.value === problem.value ? "current" : ""} `}
    >
      {problem.label}
    </div>
  {/each}
</div>

<style>
  .problem {
    outline: 1px solid;
    height: 300px;
    width: 500px;
  }
  .problem.current {
    outline: 2px solid blue;
  }
</style>
