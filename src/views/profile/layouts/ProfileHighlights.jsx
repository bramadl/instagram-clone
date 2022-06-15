function ProfileHighlights(props) {
  const { children } = props;
  
  return (
    <ul
      id="user-profile-highlights"
      className="flex items-center justify-start gap-4 p-4 overflow-auto"
    >
      {children}
    </ul>
  );
}

export default ProfileHighlights;
