<script lang="ts">
  import MasteryApp from "./lib/MasteryApp.svelte";
</script>

<main>
  <h1>String Array Mastery</h1>

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
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
