<script lang="ts">
  import Header from "../lib/components/Header.svelte";
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children } = $props();
</script>

<div>
  <Navbar />

  <main>
    {@render children()}
  </main>
  <!-- 
  <footer>
    <a href="https://discord.gg/BqnJ9Rn4sn" rel="nofollow"
      ><img
        src="https://camo.githubusercontent.com/59048820cd82d5f1c62628e406bc357436b9e2695840ec012c2233ef6b7e8071/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f313135313538323539333531393732323636383f6c6f676f3d646973636f7264"
        alt="Discord"
        data-canonical-src="https://img.shields.io/discord/1151582593519722668?logo=discord"
        style="max-width: 100%;"
      /></a
    >
    <p>
      visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn
      about SvelteKit
    </p>
    <a href="http://statcord.com/discord" target="_blank">
      <img
        src="https://discordapp.com/api/guilds/608711879858192479/embed.png"
        alt="Discord"
        height="30"
      />
    </a>
  </footer> -->
</div>
