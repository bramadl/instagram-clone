import posts from "./data/posts.json";

const postRepository = (httpClient) => ({
  async getPostsForHome() {
    return posts;
  },
});

export default postRepository;
