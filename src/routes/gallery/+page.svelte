<svelte:head>
  <title>Prowl | Gallery</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-screen h-[50vh] flex flex-col items-center justify-center">
  <h1 class="text-4xl font-semibold z-20">Gallery</h1>
  <!-- <NewGrid></NewGrid> -->
</div>

<!-- FEATURES -->
<div class="gap-24 flex flex-wrap max-w-4xl mx-auto">
  <!-- feature -->
  <img class="w-full col-span-2" src="/banana.png" alt="Prowl Editor" />
  <img class="w-full col-span-2" src="/rendering.png" alt="Prowl Editor" />
  <img class="w-full col-span-2" src="/banana-editor.png" alt="Prowl Editor" />

  <video class="w-full" loop muted autoplay>
    <source src="physics.mp4" type="video/mp4" />
    <source src="physics.mov" type="video/quicktime" />
    Your browser does not support the video tag.
  </video>
  <img
    class="h-[34rem] col-span-1"
    src="/color-picker.png"
    alt="Prowl Editor"
  />

  <video class="w-full" loop muted autoplay>
    <source src="physics.mp4" type="video/mp4" />
    <source src="physics.mov" type="video/quicktime" />
    Your browser does not support the video tag.
  </video>
</div>
