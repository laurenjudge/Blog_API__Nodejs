import { post } from "../../../backend/routes/posts";
import axios from axios;

const url = "http://localhost:3000/posts";

class PostService {
  static getPosts() {
    return new Promise(async( resolve, reject ) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        )
      } catch(err) {
        reject(err);
      }
    })
  }

  static newPost(title, text) {
    return axios.post(url, {
      title,
      text
    })
  }

  static deletePost(id) {
    return axios.delete(`${url}/${id}`);
  }
}

export default postService