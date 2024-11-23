<script lang="ts">
  import NewGrid from "$lib/magic/NewGrid.svelte";
</script>

<svelte:head>
  <title>Prowl | Features</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="h-screen w-screen">
  <div
    class="absolute z-20 h-screen w-full flex flex-col gap-5 items-center justify-center bg-none"
  >
    <h1 class="text-2xl font-semibold">Join Our Discord Community</h1>
    <div class="text-center flex flex-col">
      <!-- svelte-ignore a11y_missing_attribute -->
      <iframe
        src="https://discord.com/widget?id=1151582593519722668&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  </div>
  <NewGrid></NewGrid>
</div>

<!-- FEATURES -->
<div class="flex flex-col gap-24">
  <!-- feature -->
  <div class="w-screen grid grid-cols-2 container mx-auto max-w-5xl">
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Unity Scripting API</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Featuring a familiar Unity scripting API and workflow, making the
          transition easy.
        </p>
      </div>
    </div>
    <div class="aspect-square bg-red-500 w-[32rem]"></div>
  </div>

  <!-- feature -->
  <div class="w-screen grid grid-cols-2 container mx-auto max-w-5xl">
    <div class="aspect-square bg-red-500 w-[32rem]"></div>
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Doubles Support</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Double precision coordinates coupled with camera relative rendering by
          default allows you to efficiently render at any distance.
        </p>
        <span class="text-white/70 text-xs"
          >Tested up to 1,000,000,000 meters.</span
        >
      </div>
    </div>
  </div>

  <!-- feature -->
  <div class="w-screen grid grid-cols-2 container mx-auto max-w-5xl">
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Large Scale Physics</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Simulate the solar system with double precision physics now supported
          through JitterPhysics.
        </p>
        <span class="text-white/70 text-xs"
          >Our solar system fits in prowl 1:1 no need to scale it down.</span
        >
      </div>
    </div>
    <div class="aspect-square bg-red-500 w-[32rem]"></div>
  </div>

  <!-- feature -->
  <div class="w-screen grid grid-cols-2 container mx-auto max-w-5xl">
    <div class="aspect-square bg-red-500 w-[32rem]"></div>
    <div class="p-5 my-auto">
      <h2 class="text-4xl font-semibold pb-5">Large Scale Physics</h2>
      <div class="flex flex-col gap-3">
        <p class="text-white/70">
          Simulate a small solar system with double precision JitterPhysics!
        </p>
        <span class="text-white/70 text-xs"
          >Our solar system fits in prowl if you scale it down by a factor of
          10.</span
        >
      </div>
    </div>
  </div>
</div>

<div class="p-10 text-center text-xs">
  <p class="text-white/50">Engine released under the MIT License</p>
  <p class="text-white/50">Copyright © 2022-present</p>
</div>
