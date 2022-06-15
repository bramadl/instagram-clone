export default async function getHighlights(accountRepo, props) {
  const { id } = props;
  const highlights = await accountRepo.getAccountHighlights(id);
  return highlights;
}