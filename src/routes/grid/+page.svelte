<script lang="ts">
  import NewGrid from "$lib/magic/NewGrid.svelte";
</script>

<svelte:head>
  <title>Community</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="h-screen w-screen">
  <div
    class="absolute h-screen w-full flex items-center justify-center bg-none"
  >
    <div class="text-center flex flex-col">
      <!-- svelte-ignore a11y_missing_attribute -->

      <h1>hello</h1>
    </div>
  </div>

  <NewGrid />
</div>
