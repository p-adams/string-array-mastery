<script lang="ts">
  import { problemSets } from "../main";

  let uiRender = [
    {
      key: "sum_of_elements",
      render: {
        variables: {
          start: 10,
          sum: 0,
        },
        data: [10, 2, 12, 30, 7],
      },
    },
    {
      key: "average_of_elements",
      render: {
        variables: {
          start: 10,
          sum: 0,
        },
        data: [10, 2, 12, 30, 7],
      },
    },
    {
      key: "max_and_min",
      render: {
        variables: {
          min: Number.MIN_SAFE_INTEGER,
          max: Number.MAX_SAFE_INTEGER,
          start: 10,
        },
        data: [10, 2, 12, 30, 7],
      },
    },
  ];

  export let current: { label: string; value: string };
</script>

<div>
  {#each problemSets?.array as problem}
    <div
      class={`problem--outer ${
        current?.value === problem.value ? "current" : ""
      } `}
    >
      {problem.label}
      <div class="problem--inner">
        {JSON.stringify(
          uiRender.find(($el) => $el.key === problem.value)?.render.variables
        )}
      </div>
    </div>
  {/each}
</div>

<style>
  .problem--outer {
    outline: 1px solid;
    height: 300px;
    width: 500px;
  }
  .problem--outer.current {
    outline: 2px solid blue;
  }
</style>
