<script lang="ts">
  import NewGrid from "$lib/magic/NewGrid.svelte";
  import OldRetroGrid from "$lib/magic/OldRetroGrid.svelte";
  import RetroGrid from "$lib/magic/SkyBox.svelte";
</script>

<svelte:head>
  <title>Prowl Game Engine</title>
  <meta name="title" content="Prowl Game Engine" />
  <meta name="description" content="An open-source Unity-like game engine" />
  <meta name="image" content="/landing.png" />

  <meta property="og:title" content="Prowl Game Engine" />
  <meta
    property="og:description"
    content="An open-source Unity-like game engine"
  />
  <meta property="og:image" content="/landing.png" />
  <meta property="og:url" content="https://prowlengine.com" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="h-screen w-screen">
  <div
    class="absolute z-20 h-screen w-full flex items-center justify-center bg-none"
  >
    <div class="text-center flex flex-col">
      <!-- <span
        class="pointer-events-none pb-5 z-20 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"
      >
        Prowl Engine
      </span> -->
      <span
        class="mx-auto w-fit px-1 pointer-events-none pb-5 z-20 whitespace-pre-wrap bg-gradient-to-br to-[#bd34fe] via-[#bd34fe] from-[#41d1ff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"
      >
        Prowl Engine
      </span>
      <p class="text-white max-w-xl px-5 pb-24">
        MIT licensed C# game engine aiming to provide a seamless transition for
        developers familiar with Unity by maintaining a similar API
      </p>

      <p
        style="display: flex; justify-content: center; align-items: center; transform:translateY(-200%)"
      >
        <a
          href="https://github.com/ProwlEngine/Prowl"
          style="text-decoration: none; margin-right: 10px;"
        >
          <img
            src="https://img.shields.io/github/stars/ProwlEngine/Prowl?style=for-the-badge&logo=github&color=yellow"
            alt="GitHub Stars"
          />
        </a>
        <a
          href="https://github.com/ProwlEngine/Prowl/issues"
          style="text-decoration: none;"
        >
          <img
            src="https://img.shields.io/github/issues/ProwlEngine/Prowl?style=for-the-badge&logo=github&color=blue"
            alt="GitHub Issues"
          />
        </a>
      </p>
    </div>
  </div>

  <NewGrid />
</div>

<div class="p-10 text-center text-xs">
  <p class="text-white/50">Engine released under the MIT License</p>
  <p class="text-white/50">Copyright © 2022-present</p>
</div>
