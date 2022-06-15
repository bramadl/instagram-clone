export default async function viewProfile(accountRepo, props) {
  const { id } = props;
  const profile = await accountRepo.getAccountById(id);
  if (!profile) throw new Error("Profile could not be found.");
  return profile;
}