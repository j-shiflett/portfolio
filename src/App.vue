<template>
  <v-app>
    <v-content>
      <AppBar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar";

export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>
