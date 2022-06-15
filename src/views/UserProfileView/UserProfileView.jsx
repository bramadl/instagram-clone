import Avatar from "../../libs/components/Avatar";
import Tabs from "../../libs/components/Tabs";
import CarouselIcon from "../../libs/components/icons/CarouselIcon";
import Cover from "../../modules/account/components/highlight/Cover";
import CreateButton from "../../modules/account/components/highlight/CreateButton";
import Biodata from "../../modules/account/components/profile/Biodata";
import CreatePostButton from "../../modules/account/components/profile/CreatePostButton";
import EditButton from "../../modules/account/components/profile/EditButton";
import Information from "../../modules/account/components/profile/Information";
import MenuButton from "../../modules/account/components/profile/MenuButton";
import UsernameDropdown from "../../modules/account/components/profile/UsernameDropdown";
import PostImage from "../../modules/post/components/Image";
import Tray from "../../modules/story/Tray";

import useProfileView from "./hooks/useProfileView";

function UserProfileView() {
  const {
    activeTab,
    hasUnseenTray,
    profile,
    profileHighlights,
    profilePosts,
    profileStories,
    tabItems,
  } = useProfileView();

  return (
    <main>
      <nav
        id="user-profile-nav"
        className="sticky top-0 left-0 w-full h-auto flex items-center justify-between gap-4 p-4 bg-white"
      >
        <UsernameDropdown username={profile.username} />

        <div className="flex items-center gap-4">
          <CreatePostButton />
          <MenuButton />
        </div>
      </nav>

      <header id="user-profile-header" className="flex flex-col gap-2 px-4">
        <div
          id="user-profile-"
          className="flex items-center justify-between gap-8"
        >
          <div id="user-profile-avatar" className="flex-shrink-0">
            <Tray stories={profileStories} hasUnseenTray={hasUnseenTray}>
              <Avatar
                alternate={profile.username}
                src={profile.avatar}
                size="xl"
              />
            </Tray>
          </div>
          <div id="user-profile-information" className="flex-1">
            <Information
              postsCount={profile.posts_count}
              followersCount={profile.followers_count}
              followingCount={profile.following_count}
            />
          </div>
        </div>
        <div id="user-profile-biodata">
          <Biodata
            username={profile.username}
            biodata={profile.biodata}
            website={profile.website}
          />
          <div id="user-profile-action" className="mt-3">
            <EditButton />
          </div>
        </div>
      </header>

      <ul
        id="user-profile-highlights"
        className="flex items-center justify-start gap-4 p-4 overflow-auto"
      >
        {profileHighlights.map((highlight) => (
          <li
            key={highlight.id}
            id={`highlight-item-${highlight.id}`}
            className="flex-shrink-0 flex flex-col items-center justify-center"
          >
            <Cover name={highlight.name} cover={highlight.cover} />
          </li>
        ))}
        <li className="flex-shrink-0 flex flex-col items-center justify-center">
          <CreateButton />
        </li>
      </ul>

      <section id="user-profile-feeds">
        <header id="user-profile-tabs">
          <Tabs activeTab={activeTab} tabItems={tabItems} />
        </header>
        <article id="user-profile-posts" className="grid grid-cols-3 gap-px">
          {profilePosts.map((post) => (
            <figure key={post.id} id={`figure-${post.id}`}>
              <button className="relative block">
                {post.galleries.length > 1 && (
                  <div className="absolute right-2 top-2">
                    <CarouselIcon />
                  </div>
                )}
                <PostImage src={post.galleries[0].src} />
              </button>
            </figure>
          ))}
        </article>
      </section>
    </main>
  );
}

export default UserProfileView;
