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
      <div class="hidden md:flex space-x-6">
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

      <!-- GitHub Link -->
      <div class="corner ml-auto md:ml-0 md:px-0 px-3 flex gap-4">
        <a href="https://github.com" target="_blank" class="block">
          <!-- <img src={githubIcon} alt="GitHub" class="w-6 h-6" /> -->
          <svg
            viewBox="0 -28.5 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
          >
            <path
              d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
              fill="#ffffff"
              fill-rule="nonzero"
            >
            </path>
          </svg>
        </a>
        <a href="https://github.com" target="_blank" class="block">
          <!-- <img src={githubIcon} alt="GitHub" class="w-6 h-6" /> -->
          <img
            src="data:image/svg+xml,%3csvg%20viewBox='0%200%20256%20250'%20width='256'%20height='250'%20fill='%23fff'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%20%3e%3cpath%20d='M128.001%200C57.317%200%200%2057.307%200%20128.001c0%2056.554%2036.676%20104.535%2087.535%20121.46%206.397%201.185%208.746-2.777%208.746-6.158%200-3.052-.12-13.135-.174-23.83-35.61%207.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78%2012.853.902%2019.621%2013.19%2019.621%2013.19%2011.417%2019.568%2029.945%2013.911%2037.249%2010.64%201.149-8.272%204.466-13.92%208.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258%200-13.975%205-25.394%2013.188-34.358-1.329-3.224-5.71-16.242%201.24-33.874%200%200%2010.749-3.44%2035.21%2013.121%2010.21-2.836%2021.16-4.258%2032.038-4.307%2010.878.049%2021.837%201.47%2032.066%204.307%2024.431-16.56%2035.165-13.12%2035.165-13.12%206.967%2017.63%202.584%2030.65%201.255%2033.873%208.207%208.964%2013.173%2020.383%2013.173%2034.358%200%2049.163-29.944%2059.988-58.447%2063.157%204.591%203.972%208.682%2011.762%208.682%2023.704%200%2017.126-.148%2030.91-.148%2035.126%200%203.407%202.304%207.398%208.792%206.14C219.37%20232.5%20256%20184.537%20256%20128.002%20256%2057.307%20198.691%200%20128.001%200Zm-80.06%20182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655%201.279-.838%202.205-.399.93.418%201.46%201.293%201.139%201.931Zm6.296%205.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566%201.787-.301%202.626.591.838.903%201%202.088.363%202.66Zm4.32%207.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547%202.058-.055%202.861%201.075.782%201.157.782%202.522-.019%203.08Zm7.304%208.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776%202.213-.558%203.315.49%201.11%201.03%201.45%202.505.701%203.27Zm9.442%202.81c-.31%201.003-1.75%201.459-3.199%201.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01%201.747-1.484%203.207-1.028%201.446.436%202.396%201.602%202.095%202.622Zm10.744%201.193c.036%201.055-1.193%201.93-2.715%201.95-1.53.034-2.769-.82-2.786-1.86%200-1.065%201.202-1.932%202.733-1.958%201.522-.03%202.768.818%202.768%201.868Zm10.555-.405c.182%201.03-.875%202.088-2.387%202.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114%202.376-2.387%201.514-.263%202.868.356%203.061%201.403Z'%20/%3e%3c/svg%3e"
            alt="twitter_logo"
          />
        </a>
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
