<script lang="ts">
  import { page } from "$app/stores";
  import githubIcon from "$lib/images/github.svg";
  import prowlIcon from "$lib/images/prowl-cutout-no-border.svg";
  let isMobileMenuOpen = false;
</script>

<header class="fixed top-0 left-0 right-0 z-50">
  <nav class="text-white px-4 py-3 relative">
    <!-- Desktop Navbar -->
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <div class="corner">
        <a href="/" class="text-xl font-bold">
          <img style="transform:scale(1)" src={prowlIcon} alt="Prowl" />
        </a>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6 mx-auto pr-8">
        <a
          href="/"
          class="hover:text-gray-400"
          class:active-link={$page.url.pathname === "/"}>Features</a
        >
        <a
          href="/community"
          class="hover:text-gray-400"
          class:active-link={$page.url.pathname.startsWith("/community")}
          >Community</a
        >
        <a
          href="https://github.com/orgs/ProwlEngine/projects/1"
          target="_blank"
          class="hover:text-gray-400"
          class:active-link={$page.url.pathname.startsWith("/roadmap")}
          >roadmap</a
        >
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        class="md:hidden"
        on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {#if isMobileMenuOpen}
          <!-- X Icon -->
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        {:else}
          <!-- Menu Icon -->
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMobileMenuOpen}
      <div class="mobile-menu md:hidden px-4 pb-2">
        <a href="/" class="block py-2 hover:text-gray-400">Features</a>
        <a href="/community" class="block py-2 hover:text-gray-400">Community</a
        >
        <a
          href="https://github.com/orgs/ProwlEngine/projects/1"
          target="_blank"
          class="block py-2 hover:text-gray-400">Roadmap</a
        >
      </div>
    {/if}
  </nav>
</header>

<style>
  .active-link {
    position: relative;
  }

  .active-link::after {
    content: "";
    position: absolute;
    top: -5px; /* Adjust the position below the link */
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white; /* Color of the triangle */
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav a {
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
  }

  svg {
    width: 2em;
    height: 2em;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
  }

  .mobile-menu {
    position: absolute; /* Position the dropdown menu absolutely */
    top: 100%; /* Position it below the header */
    left: 0;
    right: 0;
    z-index: 100; /* Ensure it appears above other elements */
    background-color: black; /* Match the navbar background */
  }
</style>
