import axios from "axios";

const url = "http://localhost:3000/posts";

export default class PostService {
  static getPosts() {
    return axios.get(url).then(res => {
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
  }

  static newPost(title, text) {
    console.log(title)
      console.log(text)
    return axios.post(url, {
      title:title,
      text:text
    })
  }

  static deletePost(id) {
    return axios.delete(`${url}/${id}`);
  }
}