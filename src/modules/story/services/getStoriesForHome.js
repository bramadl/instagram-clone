export default async function getStoriesForHome(storyRepo, props) {
  const { id } = props;
  const stories = await storyRepo.getStoriesForHome(id);
  return stories;
}