import React, { useState } from "react";
import { Link } from "react-router-dom";

import useProfileView from "../hooks/useProfileView";

import Avatar from "../../../libs/components/Avatar";
import GlobalHeader from "../../../libs/components/GlobalHeader";
import Tabs from "../../../libs/components/Tabs";
import CarouselIcon from "../../../libs/components/icons/CarouselIcon";
import ChevronDownIcon from "../../../libs/components/icons/ChevronDownIcon";
import GridIcon from "../../../libs/components/icons/GridIcon";
import MentionIcon from "../../../libs/components/icons/MentionIcon";
import ReelsIcon from "../../../libs/components/icons/ReelsIcon";
import SeriesIcon from "../../../libs/components/icons/SeriesIcon";

import Cover from "../../../modules/account/components/highlight/Cover";
import Biodata from "../../../modules/account/components/profile/Biodata";
import EmailButton from "../../../modules/account/components/profile/EmailButton";
import FollowButton from "../../../modules/account/components/profile/FollowButton";
import Information from "../../../modules/account/components/profile/Information";
import MenuButton from "../../../modules/account/components/profile/MenuButton";
import MessageButton from "../../../modules/account/components/profile/MessageButton";
import NotifyUpdateButton from "../../../modules/account/components/profile/NotifyUpdateButton";

import PostImage from "../../../modules/post/components/Image";

import Tray from "../../../modules/story/components/Tray";

import ProfileFeeds from "../layouts/ProfileFeeds";
import ProfileHeader from "../layouts/ProfileHeader";
import ProfileHighlights from "../layouts/ProfileHighlights";

function AccountProfileView() {
  const tabs = [
    {
      element: <GridIcon />,
      name: "Posts",
      onClick() {},
    },
    {
      element: <ReelsIcon />,
      name: "Reels",
      onClick() {},
    },
    {
      element: <SeriesIcon />,
      name: "Series",
      onClick() {},
    },
    {
      element: <MentionIcon />,
      name: "TaggedPosts",
      onClick() {},
    },
  ];

  const {
    activeTab,
    hasUnseenTray,
    profile,
    profileHighlights,
    profilePosts,
    profileStories,
    tabItems,
  } = useProfileView(2, tabs);

  // Local state data, possibly moved somewhere else.
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <main>
      <GlobalHeader id="profile-nav">
        <React.Fragment>
          <div className="flex-1 flex items-center justify-start ">
            <Link className="rotate-90" to="/">
              <ChevronDownIcon />
            </Link>
          </div>

          <h1 className="flex-1 font-bold text-xl text-center">
            {profile.username}
          </h1>

          <div className="flex-1 flex items-center justify-end gap-4">
            <NotifyUpdateButton />
            <MenuButton iconType="dots" />
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
              <div className="flex items-center gap-2">
                <FollowButton
                  isFollowing={isFollowing}
                  onClick={() => setIsFollowing(!isFollowing)}
                />
                <MessageButton />
                <EmailButton />
              </div>
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

export default AccountProfileView;
