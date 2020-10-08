<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Fullstack Posts App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <PostsComponent />
    </v-main>
  </v-app>
</template>

<script>
import PostsComponent from "./components/PostsComponent";

export default {
  name: "App",

  components: {
    PostsComponent
  },

  data: () => ({
    //
  })
};
</script>