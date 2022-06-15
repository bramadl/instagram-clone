import accounts from "./data/accounts.json";
import highlights from "./data/highlights.json";
import posts from "./data/posts.json";

const accountRepo = (httpClient) => ({
  async getAccountById(id) {
    return accounts.find(account => account.id === id);
  },

  async getPostsById(id) {
    return posts;
  },

  async getAccountHighlights(id) {
    return highlights;
  }
});

export default accountRepo;
