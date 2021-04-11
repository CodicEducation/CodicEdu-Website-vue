<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/globalStyles.scss";
html,
body {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: #1a1a1a;
  scroll-behavior: smooth;
}

* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  outline: none;
  // transition: all 0.4s ease;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #efefef;
  width: 100vw;
  min-height: 100vh;

  h1,
  h2,
  h3,
  h4,
  blockquote {
    font-family: "Montserrat", sans-serif;
  }

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: block;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  //transform: translateX(2rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 768px) {
  #app {
    .mobile-only {
      display: block;
    }

    .desktop-only {
      display: none;
    }
  }
}
</style>
