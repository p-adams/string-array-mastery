<script lang="ts">
  import MasteryApp from "./lib/MasteryApp.svelte";
  import { problemSets } from "./main";

  let current: { label: string; value: string } = problemSets.array[0];
</script>

<main>
  <h1>String Array Mastery</h1>
  <nav>
    <ul>
      <li>
        Array <ul>
          {#each problemSets.array as problem}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li
              class={`problem ${
                current?.value === problem.value ? "current" : ""
              }`}
              on:click={() => (current = problem)}
            >
              {problem.label}
            </li>
          {/each}
        </ul>
      </li>
    </ul>
  </nav>

  <div class="card">
    <MasteryApp {current} />
  </div>

  <p class="read-the-docs">
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">Guide</a
    >, to learn how to play!
  </p>
</main>

<style>
  main {
    display: grid;
    grid-template-areas:
      "header header"
      "nav card"
      "footer footer";
  }
  h1 {
    grid-area: header;
  }
  nav {
    grid-area: nav;
  }
  .card {
    grid-area: card;
  }
  p {
    grid-area: footer;
  }
  .read-the-docs {
    color: #888;
  }
  ul li {
    line-height: 5rem;
  }
  .problem.current {
    outline: 1px solid blue;
  }
</style>
