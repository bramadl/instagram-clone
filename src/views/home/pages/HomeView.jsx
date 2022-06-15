import React from "react";

import useHomeView from "../hooks/useHomeView";

import InstagramIcon from "../../../libs/components/icons/InstagramIcon";

import CheckMessageButton from "../../../modules/account/components/feeds/CheckMessageButton";
import CheckNotificationButton from "../../../modules/account/components/feeds/CheckNotificationButton";
import CreatePostButton from "../../../modules/account/components/profile/CreatePostButton";

import TrayWithCover from "../../../modules/story/components/TrayWithCover";

import Post from "../../../modules/post/components/Post";

import AppNav from "../../layouts/AppNav";
import HomeStories from "../layouts/HomeStories";

function HomeView() {
  const { profile, posts, stories } = useHomeView(1);

  return (
    <main>
      <AppNav id="home-nav">
        <React.Fragment>
          <div id="home-root-link">
            <a href="/">
              <InstagramIcon />
            </a>
          </div>

          <div id="home-nav-menu" className="flex items-center gap-4">
            <CreatePostButton />
            <CheckNotificationButton />
            <CheckMessageButton />
          </div>
        </React.Fragment>
      </AppNav>

      <HomeStories id="home-stories">
        {stories.map((story) => (
          <li
            key={story.id}
            className="flex-shrink-0 flex flex-col items-center gap-1"
          >
            <TrayWithCover account={story.account} stories={story.stories} />
          </li>
        ))}
      </HomeStories>

      <section id="home-posts">
        {posts.map((post) => (
          <Post key={post.id} profile={profile} post={post} />
        ))}
      </section>
    </main>
  );
}

export default HomeView;
