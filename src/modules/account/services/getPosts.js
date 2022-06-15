export default async function getPosts(accountRepo, props) {
  const { id } = props;
  const highlights = await accountRepo.getPostsById(id);
  return highlights;
}