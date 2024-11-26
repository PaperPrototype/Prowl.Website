<script lang="ts">
  import NewGrid from "$lib/magic/NewGrid.svelte";
</script>

<svelte:head>
  <title>Prowl | Features</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div
  class="w-screen h-[40vh] md:h-[50vh] flex flex-col items-center justify-center"
>
  <h1 class="text-4xl font-semibold z-20">Features</h1>
  <!-- <NewGrid></NewGrid> -->
</div>

<!-- FEATURES -->
<div class="flex flex-col gap-24">
  <!-- feature -->
  <div
    class="w-screen flex flex-col-reverse md:grid md:grid-cols-3 container mx-auto max-w-4xl"
  >
    <img
      class="w-full col-span-2 p-5"
      src="/cross-platform.png"
      alt="Prowl Editor"
    />
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Cross-Platform</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Supports Windows, Linux & Mac, with plans for mobile and web platforms
        </p>
      </div>
    </div>
    <!-- <div class="aspect-video bg-red-500 w-[32rem]"></div> -->
  </div>

  <!-- feature -->
  <div
    class="w-screen flex flex-col md:grid md:grid-cols-3 container mx-auto max-w-5xl"
  >
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Fully Featured Editor</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Build and deploy games across Windows, Linux & Mac platforms
        </p>
      </div>
    </div>
    <img class="w-full col-span-2 p-5" src="/banana.png" alt="Prowl Editor" />
    <!-- <div class="aspect-video bg-red-500 w-[32rem]"></div> -->
  </div>

  <!-- feature -->
  <div class="w-screen grid grid-cols-2 container mx-auto max-w-5xl">
    <img class="w-full col-span-1 p-5" src="/code.png" alt="Prowl Editor" />
    <!-- <div class="aspect-video bg-red-500 w-[32rem]"></div> -->
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Unity Scripting API</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Featuring a familiar Unity scripting API and workflow, making the
          transition easy for developers
        </p>
      </div>
    </div>
  </div>

  <!-- feature -->
  <div
    class="w-screen flex flex-col md:grid md:grid-cols-2 container mx-auto max-w-5xl"
  >
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Physics</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Simulate the solar system with double precision physics now supported
          through JitterPhysics.
        </p>
        <span class="text-white/70 text-xs">
          Yes technically our solar system fits in 1:1 without needing to scale
          it down. Now you can finally make those Planets you've always wanted!
        </span>
      </div>
    </div>
    <video class="w-full p-5" loop muted autoplay>
      <source src="jitter.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- <div class="aspect-video bg-red-500 w-[32rem]"></div> -->
  </div>

  <!-- feature -->
  <div
    class="w-screen flex flex-col-reverse md:grid md:grid-flow-row grid-cols-2 container mx-auto max-w-5xl"
  >
    <img
      class="h-[34rem] mx-auto col-span-1 p-5"
      src="/color-picker.png"
      alt="Prowl Editor"
    />
    <!-- <div class="aspect-video bg-red-500 w-[32rem]"></div> -->
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Custom UI Library</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          A powerful UI system for both in-game and editor interfaces.
        </p>
      </div>
    </div>
  </div>

  <!-- feature -->
  <div class="w-screen md:grid md:grid-cols-2 container mx-auto max-w-5xl">
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Instant Familiarity</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Jump right in with Unity-inspired workflows and APIs. Zero learning
          curve for Unity developers, plus the freedom to customize everything.
        </p>
      </div>
    </div>
    <video class="w-full p-5" loop muted autoplay>
      <source src="physics.mp4" type="video/mp4" />
      <source src="physics.mov" type="video/quicktime" />
      Your browser does not support the video tag.
    </video>

    <!-- <div class="aspect-video bg-red-500 w-[32rem]"></div> -->
  </div>

  <!-- feature -->
  <div
    class="w-screen flex flex-col-reverse md:grid md:grid-cols-2 container mx-auto max-w-5xl"
  >
    <img class="col-span-1 p-5" src="/banana-below.webp" alt="Prowl Editor" />
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Robust Rendering</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Realtime area lights with Perfect Transparency being possible thanks
          to Forward rendering.* Our graphics backend has been completely
          re-written to use Veldrid which has zero native DLL dependencies, and
          talks directly to the operating system's graphics drivers from C#.
        </p>
      </div>
      <div class="text-xs text-white/50 pt-5">
        *Possible but we haven't quite implemented it yet.
      </div>
    </div>

    <!-- <div class="aspect-video bg-red-500 w-[32rem]"></div> -->
  </div>
</div>

<div class="mx-auto max-w-3xl p-5 gap-3">
  <h1 class="text-4xl font-semibold z-20 text-center py-10">
    Even More Features
  </h1>
  <!-- CARDS -->
  <div class="feature-grid mx-auto">
    <!-- card -->
    <div class="feature-card border border-white/40 rounded-xl">
      <h4 class="text-center font-semibold">Fully Featured Editor</h4>
      <p class="text-sm text-white/70 text-center mb-auto">
        A fully featured Editor with familiar controls for Unity developers.
      </p>
    </div>
    <!-- card -->
    <div class="feature-card border border-white/40 rounded-xl">
      <h4 class="text-center font-semibold">Physics</h4>
      <p class="text-sm text-white/70 text-center mb-auto">
        Integrated Bepu Physics 2 for realistic simulations and interactions.
      </p>
    </div>
    <!-- card -->
    <div class="feature-card border border-white/40 rounded-xl">
      <h4 class="text-center font-semibold">Powerful Asset Pipeline</h4>
      <p class="text-sm text-white/70 text-center mb-auto">
        Similar structure to Unity, with support for custom importers and many
        file formats.
      </p>
    </div>
    <!-- card -->
    <div class="feature-card border border-white/40 rounded-xl">
      <h4 class="text-center font-semibold">Custom UI Library</h4>
      <p class="text-sm text-white/70 text-center mb-auto">
        A powerful UI system for both in-game and editor interfaces inspired by
        <a class="underline" target="_blank" href="https://pangui.io"
          >pangui.io</a
        >
      </p>
    </div>
  </div>
</div>

<div class="p-10 text-center text-xs">
  <p class="text-white/50">Engine released under the MIT License</p>
  <p class="text-white/50">Copyright © 2022-present</p>
</div>

<style>
  .feature-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(
      auto-fill,
      minmax(190px, 1fr)
    ); /* Play with min-value */
  }

  .feature-card {
    /* border-width: 0.5px; */
    aspect-ratio: 14/9;
    /*
    "contain" to see full original image with eventual empty space
    "cover" to fill empty space with truncating
    "fill" to stretch
  */
    object-fit: contain;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
</style>
