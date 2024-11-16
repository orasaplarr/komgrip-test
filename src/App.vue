<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
-->

  <div id="app" class="bg-gray-100" style="height: 100vh">
    <DashBoard />
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import DashBoard from "./views/DashBoard.vue";
</script>
<style scoped></style>
