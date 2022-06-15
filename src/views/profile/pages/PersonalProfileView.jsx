import React from "react";

import useProfileView from "../hooks/useProfileView";

import Avatar from "../../../libs/components/Avatar";
import GlobalHeader from "../../../libs/components/GlobalHeader";
import Tabs from "../../../libs/components/Tabs";
import CarouselIcon from "../../../libs/components/icons/CarouselIcon";

import Cover from "../../../modules/account/components/highlight/Cover";
import CreateButton from "../../../modules/account/components/highlight/CreateButton";
import Biodata from "../../../modules/account/components/profile/Biodata";
import CreatePostButton from "../../../modules/account/components/profile/CreatePostButton";
import EditButton from "../../../modules/account/components/profile/EditButton";
import Information from "../../../modules/account/components/profile/Information";
import MenuButton from "../../../modules/account/components/profile/MenuButton";
import UsernameDropdown from "../../../modules/account/components/profile/UsernameDropdown";

import PostImage from "../../../modules/post/components/Image";

import Tray from "../../../modules/story/components/Tray";

import ProfileFeeds from "../layouts/ProfileFeeds";
import ProfileHeader from "../layouts/ProfileHeader";
import ProfileHighlights from "../layouts/ProfileHighlights";

function PersonalProfileView() {
  const {
    activeTab,
    hasUnseenTray,
    profile,
    profileHighlights,
    profilePosts,
    profileStories,
    tabItems,
  } = useProfileView(1);

  return (
    <main>
      <GlobalHeader id="profile-nav">
        <React.Fragment>
          <UsernameDropdown username={profile.username} />

          <div className="flex items-center gap-4">
            <CreatePostButton />
            <MenuButton />
          </div>
        </React.Fragment>
      </GlobalHeader>

      <ProfileHeader
        profileAvatar={
          <Tray stories={profileStories} hasUnseenTray={hasUnseenTray}>
            <Avatar
              alternate={profile.username}
              src={profile.avatar}
              size="xl"
            />
          </Tray>
        }
        profileInformation={
          <Information
            postsCount={profile.posts_count}
            followersCount={profile.followers_count}
            followingCount={profile.following_count}
          />
        }
        profileBiodata={
          <React.Fragment>
            <Biodata
              username={profile.username}
              biodata={profile.biodata}
              website={profile.website}
            />
            <div id="user-profile-action" className="mt-3">
              <EditButton />
            </div>
          </React.Fragment>
        }
      />

      <ProfileHighlights>
        <React.Fragment>
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
        </React.Fragment>
      </ProfileHighlights>

      <ProfileFeeds
        profileTabs={<Tabs activeTab={activeTab} tabItems={tabItems} />}
      >
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
      </ProfileFeeds>
    </main>
  );
}

export default PersonalProfileView;
