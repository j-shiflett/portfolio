<template>
  <v-app>
    <v-content>
      <AppBar />
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  }
};
</script>

<style>
* {
  font-family: "Quicksand", sans-serif;
}

/* transition animation */
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
