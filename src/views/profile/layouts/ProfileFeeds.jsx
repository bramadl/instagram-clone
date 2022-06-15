function ProfileFeeds(props) {
  const { children, profileTabs } = props;
  
  return (
    <section id="user-profile-feeds">
      <header id="user-profile-tabs">
        {profileTabs}
      </header>
      <article id="user-profile-posts" className="grid grid-cols-3 gap-px">
        {children}
      </article>
    </section>
  );
}

export default ProfileFeeds;
