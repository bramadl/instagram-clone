import accounts from "./data/accounts.json";
import highlights from "./data/highlights.json";
import posts from "./data/posts.json";
import stories from "./data/stories.json";

const accountRepo = (httpClient) => ({
  async getAccountById(id) {
    return accounts.find(account => account.id === id);
  },

  async getPostsById(id) {
    return posts;
  },

  async viewAccountStory(id) {
    return stories;
  },

  async getAccountHighlights(id) {
    return highlights;
  }
});

export default accountRepo;
