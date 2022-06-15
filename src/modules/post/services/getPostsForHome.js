export default async function getPostsForHome(postRepo, props) {
  const { id } = props;
  const stories = await postRepo.getPostsForHome(id);
  return stories;
}