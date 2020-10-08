import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000/posts"
  },
  mutations: {},
  actions: {
    getPosts(context) {
      return axios.get(context.state.url).then(res => {
        const data = res.data;
        return data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }
        ));
      })
      .catch(err => {
        return err;
      })
    },
    newPost(title, text) {
      return axios.post("http://localhost:3000/posts", {
        title,
        text
      })
    },
    deletePost(id) {
      console.log(id)
      return axios.delete(`http://localhost:3000/posts/${id}`);
    }
  },
  modules: {}
});
