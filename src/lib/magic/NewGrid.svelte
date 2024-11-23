<!-- https://codepen.io/kirkland/pen/ZaWJMb -->

<div class="container">
  <div class="grid">
    <div class="grid-fade"></div>
    <div class="grid-lines"></div>
  </div>
</div>

<style lang="scss" scoped>
  $body-bg: #000000;
  $grid-color: rgba(#ffffff, 0.3);
  $grid-height: 100vh;

  .container {
    background-color: $body-bg;
    position: absolute;
  }
  .grid {
    width: 100vw;
    height: $grid-height;
    overflow: hidden;
    perspective: ($grid-height * 0.75);
  }
  .grid-fade {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    // background: linear-gradient(to bottom, transparent, transparent, black);
    background: radial-gradient(
      ellipse at 50% 50%,
      rgba($body-bg, 0%) 0%,
      rgba($body-bg, 100%) 80%
    );
  }
  .grid-lines {
    width: 100%;
    height: 200%;
    background-image: linear-gradient(to right, $grid-color 1px, transparent 0),
      linear-gradient(to bottom, $grid-color 1px, transparent 0);
    background-size: 20px 20px;
    background-repeat: repeat;
    transform-origin: 100% 0 0;
    animation: play 100s linear infinite;
  }

  @keyframes play {
    0% {
      transform: rotateX(46deg) translateY(0);
    }
    100% {
      transform: rotateX(46deg) translateY(-50%);
    }
  }
</style>
