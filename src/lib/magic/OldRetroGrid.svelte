<script lang="ts">
  import { cn } from "$lib/utils";

  let className: any = "";
  export { className as class };
</script>

<div
  class={cn(
    "pointer-events-none absolute h-full w-full overflow-hidden opacity-100 [perspective:200px]",
    className
  )}
>
  <!-- Grid  -->
  <div class="absolute inset-1 [transform:rotateX(35deg)]">
    <div
      class={cn(
        "animate-grid",

        "[background-repeat:repeat] [background-size:80px_80px] [height:1000vh] [inset:0%_0px] [transform-origin:100%_0_0] [width:600vw]",

        // // Light Styles
        // "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",

        // // Dark styles
        // "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]",

        // Light Styles
        "[background-image:linear-gradient(to_right,rgba(0,0,0,0.5) 1px,transparent),linear-gradient(to_bottom,rgba(0,0,0,0.5) 1px,transparent)]",

        // Dark styles
        "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_0)]",

        // Adjust margin to move grid to the left
        "[margin-left:-250%]",
        "[margin-top:20%]",

        // // Fade effect at the top
        // "[mask-image:linear-gradient(to_bottom,transparent,black)]"

        // Fade effect at the top
        "[mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))]"
      )}
    ></div>
  </div>

  <!-- Background Gradient -->
  <div
    class="absolute z-10 inset-0 bg-gradient-to-t from-black via-transparent to-transparent to-90%"
  ></div>
</div>
