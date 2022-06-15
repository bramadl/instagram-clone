import stories from "./data/stories.json";

const storyRepo = (httpClient) => ({
  async getStoriesByUserId(id) {
    return stories;
  },
});

export default storyRepo;
