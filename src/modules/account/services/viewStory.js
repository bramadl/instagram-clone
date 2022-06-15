export default async function viewStory(accountRepo, props) {
  const { id } = props;
  const stories = await accountRepo.viewAccountStory(id);
  return stories;
}