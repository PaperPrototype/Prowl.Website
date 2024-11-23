<script lang="ts">
  import NewGrid from "$lib/magic/NewGrid.svelte";
</script>

<svelte:head>
  <title>Community</title>
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
