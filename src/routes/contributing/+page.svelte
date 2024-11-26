<svelte:head>
  <title>Prowl | Contributing</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-screen h-[40vh] flex flex-col items-center justify-center">
  <h1 class="text-4xl font-semibold z-20">Contributing</h1>
  <!-- <NewGrid></NewGrid> -->
</div>

<div class="mx-auto max-w-3xl flex flex-col readable p-10">
  <p>
    <span>DISCLAIMER:</span>
    It is important to note out that while prowl shows promise the engine is relatively
    unstable. Therefore it's very likely that your first experience won't be very
    pleasant. Nonetheless for the engine to become stable we need developers to use
    it. This short guide is for those developers who wish to push past the current
    potentially painful process of getting prowl up and running with the goal of
    helping shape this into an engine worthy of getting a 1.0 release.
  </p>
  <p>
    Prowl is extremely simple to setup since it is written entirely in C# all
    you need is:
  </p>
  <ul>
    <li>
      .NET 9.0 and its tools fully installed on your machine
      <a target="_blank" href="https://dotnet.microsoft.com/en-us/download">
        https://dotnet.microsoft.com/en-us/download
      </a>
    </li>
    <li>Any code editor that supports C#</li>
  </ul>
  <p>
    Visual Studio Code will work on any machine, just make sure to install the
    <a
      href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit"
      target="_blank"
      rel="noopener noreferrer"
    >
      C# Dev Kit extension
    </a>. Visual Studio 2022 is also a great option but can sometimes be hard to
    grasp. You can download both of these
    <a href="https://visualstudio.microsoft.com/downloads/">here</a> if you don't
    already have them.
  </p>
  <p>
    Once you have the project installed as well as the latest version of .NET go
    to the root of the project and run the following command:
  </p>
  <pre>
    <code>
        dotnet run --project Prowl.Editor</code
    >
  </pre>
  <p>Thats it!</p>
  <p>
    If you are using Visual Studio 2022, you can double click the .sln file in
    the root of the repo to open the project. Once you open the project make
    sure you <strong>don't</strong> start in Debug mode otherwise errors will cause
    the editor to go to the line that has the error instead of just logging it to
    the console window in the Prowl Editor.
  </p>
  <p>
    <span>DISCLAIMER FOR Apple Silicon: </span> For some reason veldrid.sdl2 and
    AssimpNet fail to provide a proper libsdl2.dylib and libassimp.dylib for
    apple silicon. For convienience you can download proper dylibs for apple
    silicon
    <a href="/libsdl2.dylib" download="/libsdl2.dylib">here (libsdl2.dylib)</a>
    and
    <a href="/libassimp.dylib" download="/libassimp.dylib"
      >here (libassimp.dylib)</a
    >.
  </p>
</div>

<div class="p-10 text-center text-xs">
  <p class="text-white/50">Engine released under the MIT License</p>
  <p class="text-white/50">Copyright © 2022-present</p>
</div>

<style scoped>
  .readable p {
    @apply font-light text-white/75 pt-5;
  }

  .readable ul {
    @apply font-light text-white/75 list-disc;
  }

  .readable ul li {
    @apply font-light text-white/75;
  }

  .readable a {
    @apply underline;
  }

  .readable p > code {
    @apply font-light text-white/75 text-sm;
  }
</style>
