<template>
  <v-card class="overflow-hidden">
    <v-app-bar app color="white" flat>
      <v-toolbar-title>James Shiflett</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="link in links" :key="link.name" :to="link.path" text>{{ link.name }}</v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    links: [
      {
        name: "Home",
        path: "/"
      },
      {
        name: "About Me",
        path: "/aboutme"
      },
      {
        name: "Projects",
        path: "/projects"
      },
      {
        name: "Contact Me",
        path: "/contactme"
      }
    ]
  })
};
</script>
