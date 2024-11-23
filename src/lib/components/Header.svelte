<script lang="ts">
  import { page } from "$app/stores";
  import logo from "$lib/images/prowl-cutout-no-border.svg";
  import github from "$lib/images/github.svg";
  import { writable } from "svelte/store";

  const isMenuOpen = writable(false);

  function toggleMenu() {
    isMenuOpen.update((open) => !open);
  }
</script>

<div
  style="
  z-index:100;
position: fixed;
top: 0;
left: 0;
right: 0;"
>
  <header>
    <div class="corner">
      <a href="/">
        <img style="" src={logo} alt="SvelteKit" />
      </a>
    </div>

    <nav class:open={$isMenuOpen}>
      <svg viewBox="0 0 2 3" aria-hidden="true">
        <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
      </svg>
      <ul>
        <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
          <a href="/">Home</a>
        </li>
        <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
          <a
            target="_blank"
            href="https://github.com/orgs/ProwlEngine/projects/1"
          >
            Roadmap <span class="external-link-icon">↗</span>
          </a>
        </li>
        <li
          aria-current={$page.url.pathname.startsWith("/sverdle")
            ? "page"
            : undefined}
        >
          <a target="_blank" href="https://github.com/ProwlEngine/Prowl"
            >Github <span class="external-link-icon">↗</span>
          </a>
        </li>
      </ul>
      <svg viewBox="0 0 2 3" aria-hidden="true">
        <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
      </svg>
    </nav>

    <button class="corner menu-toggle" on:click={toggleMenu}> ☰ </button>

    <div class="corner">
      <a href="https://github.com/sveltejs/kit">
        <!-- <img src={github} alt="GitHub" /> -->

        <img
          src="data:image/svg+xml,%3csvg%20viewBox='0%200%20256%20250'%20width='256'%20height='250'%20fill='%23fff'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%20%3e%3cpath%20d='M128.001%200C57.317%200%200%2057.307%200%20128.001c0%2056.554%2036.676%20104.535%2087.535%20121.46%206.397%201.185%208.746-2.777%208.746-6.158%200-3.052-.12-13.135-.174-23.83-35.61%207.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78%2012.853.902%2019.621%2013.19%2019.621%2013.19%2011.417%2019.568%2029.945%2013.911%2037.249%2010.64%201.149-8.272%204.466-13.92%208.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258%200-13.975%205-25.394%2013.188-34.358-1.329-3.224-5.71-16.242%201.24-33.874%200%200%2010.749-3.44%2035.21%2013.121%2010.21-2.836%2021.16-4.258%2032.038-4.307%2010.878.049%2021.837%201.47%2032.066%204.307%2024.431-16.56%2035.165-13.12%2035.165-13.12%206.967%2017.63%202.584%2030.65%201.255%2033.873%208.207%208.964%2013.173%2020.383%2013.173%2034.358%200%2049.163-29.944%2059.988-58.447%2063.157%204.591%203.972%208.682%2011.762%208.682%2023.704%200%2017.126-.148%2030.91-.148%2035.126%200%203.407%202.304%207.398%208.792%206.14C219.37%20232.5%20256%20184.537%20256%20128.002%20256%2057.307%20198.691%200%20128.001%200Zm-80.06%20182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655%201.279-.838%202.205-.399.93.418%201.46%201.293%201.139%201.931Zm6.296%205.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566%201.787-.301%202.626.591.838.903%201%202.088.363%202.66Zm4.32%207.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547%202.058-.055%202.861%201.075.782%201.157.782%202.522-.019%203.08Zm7.304%208.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776%202.213-.558%203.315.49%201.11%201.03%201.45%202.505.701%203.27Zm9.442%202.81c-.31%201.003-1.75%201.459-3.199%201.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01%201.747-1.484%203.207-1.028%201.446.436%202.396%201.602%202.095%202.622Zm10.744%201.193c.036%201.055-1.193%201.93-2.715%201.95-1.53.034-2.769-.82-2.786-1.86%200-1.065%201.202-1.932%202.733-1.958%201.522-.03%202.768.818%202.768%201.868Zm10.555-.405c.182%201.03-.875%202.088-2.387%202.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114%202.376-2.387%201.514-.263%202.868.356%203.061%201.403Z'%20/%3e%3c/svg%3e"
          alt="twitter_logo"
          class="size-6"
        />
      </a>
    </div>
  </header>
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 0.5em;
    position: relative; /* Ensure positioning context for absolute children */
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(0, 0, 0, 0.7);
  }

  nav.open {
    display: block;
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"]::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid white;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: white;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  nav a:hover,
  nav a:hover .external-link-icon {
    color: gray; /* Apply hover color to both link and icon */
  }

  .external-link-icon {
    font-size: 0.7em;
    margin-left: 0.2em;
    vertical-align: middle;
    transition: color 0.2s linear; /* Add transition for smooth color change */
  }

  @media (max-width: 600px) {
    .menu-toggle {
      display: block;
      /* position: absolute; */
      /* right: 1em; /* Align to the right
    }

    nav {
      display: none;
      position: absolute;
      top: 100%; /* Position below the header */
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: black;
      z-index: 1; /* Ensure it appears above other content */
    }

    nav.open {
      display: flex;
    }

    ul {
      flex-direction: column;
    }

    li {
      width: 100%;
      text-align: center;
    }
  }
</style>
