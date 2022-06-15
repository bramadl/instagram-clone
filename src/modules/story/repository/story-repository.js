import homeStories from "./data/home-stories.json";
import stories from "./data/stories.json";

const storyRepo = (httpClient) => ({
  async getStoriesByUserId(id) {
    return stories;
  },

  async getStoriesForHome() {
    return homeStories;
  },
});

export default storyRepo;
