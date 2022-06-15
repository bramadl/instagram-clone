export default async function getStoriesByUserId(storyRepo, props) {
  const { id } = props;
  const stories = await storyRepo.getStoriesByUserId(id);
  return stories;
}