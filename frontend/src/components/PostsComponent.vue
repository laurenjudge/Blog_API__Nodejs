<template>
  <div>
    <h1 class="text-center mt-2">Posts</h1>
    <v-divider></v-divider>
    <form action="" class="mt-12">
      <v-row>
        <v-col
          cols="12"
          sm="6" class="pa-0 mx-auto"
        >
          <v-text-field 
            v-model="title" dense
            label="Post Title"
            outlined
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-0 mx-auto"
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="text" dense
            label="Post Content"
            outlined
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-0 mx-auto" cols="12" sm="6">
          <v-btn color="secondary" small @click="createPost">Create Post</v-btn>
        </v-col>
      </v-row>
    </form>

    <v-card v-for="(post, i) in posts" :key="i" width="500" class="mx-auto my-5">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
          </div>
          <v-list-item-title class="headline mb-1">
            {{post.title}}
          </v-list-item-title>
          <v-list-item-subtitle>{{post.text}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
        <v-card-actions>
         <v-btn text color="green">
          Edit
        </v-btn>
        <v-btn text color="red" @click="deletePost(post.id)">
          Delete
        </v-btn>
    </v-card-actions>

    </v-card>
  </div>
</template>

<script>
import PostService from "@/services/api/PostService.js";

export default {
  name: "PostsComponent",
  data() {
    return {
      posts: [],
      error: '',
      title: '',
      text: ''
    }
  },
  methods: {
    async createPost() {
      try {
        await PostService.newPost(this.title, this.text)
        this.posts = await PostService.getPosts()
      } catch(error) {
        console.log(error)
      }
    },
    async deletePost(id) {
      try {
        await PostService.deletePost(id)
        this.posts = await PostService.getPosts();
      } catch(error) {
        console.log(error)
      }
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(error) {
      this.error = error.message;
    }
  }
}
</script>