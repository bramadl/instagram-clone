export default async function viewStory(storyRepo, props) {
  const { id } = props;
  const stories = await storyRepo.getStoriesByUserId(id);
  return stories;
}