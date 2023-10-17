<script lang="ts">
  import MasteryApp from "./lib/MasteryApp.svelte";
  const problemSets = {
    array: [
      {
        label: "Sum of Elements",
        value: "sum_of_elements",
      },
      {
        label: "Average of Elements",
        value: "average_of_elements",
      },
      {
        label: "Max and Min",
        value: "max_and_min",
      },
    ],
  };
</script>

<main>
  <h1>String Array Mastery</h1>
  <nav>
    <ul>
      <li>
        Array <ul>
          {#each problemSets.array as problem}
            <li>{problem.label}</li>
          {/each}
        </ul>
      </li>
    </ul>
  </nav>

  <div class="card">
    <MasteryApp />
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
</style>
