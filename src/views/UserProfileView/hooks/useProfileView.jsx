import { useEffect, useState } from "react";
import GridIcon from "../../../libs/components/icons/GridIcon";
import MentionIcon from "../../../libs/components/icons/MentionIcon";
import accountRepo from "../../../modules/account/repository";
import getHighlights from "../../../modules/account/services/getHighlights";
import getPosts from "../../../modules/account/services/getPosts";
import viewProfile from "../../../modules/account/services/viewProfile";
import viewStory from "../../../modules/account/services/viewStory";

// @TODO: dynamically evaluate props.id expression value.
export default function useProfileView() {
  const [activeTab] = useState("Posts");
  const [profile, setProfile] = useState({});
  const [profilePosts, setProfilePosts] = useState([]);
  const [profileStories, setProfileStories] = useState([]);
  const [profileHighlights, setProfileHighlights] = useState([]);
  const [hasUnseenTray, setHasUnseenTray] = useState(false);

  useEffect(() => {
    const props = { id: 1 };
    viewProfile(accountRepo, props)
      .then((profile) => setProfile(profile))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const props = { id: 1 };
    getPosts(accountRepo, props)
      .then((posts) => setProfilePosts(posts))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const props = { id: 1 };
    viewStory(accountRepo, props)
      .then((stories) => {
        setProfileStories(stories);
        setHasUnseenTray(stories.some((story) => story.isWatched));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const props = { id: 1 };
    getHighlights(accountRepo, props)
      .then((highlights) => setProfileHighlights(highlights))
      .catch((error) => console.log(error));
  }, []);

  const tabItems = [
    {
      element: <GridIcon />,
      name: "Posts",
      onClick() {},
    },
    {
      element: <MentionIcon />,
      name: "TaggedPosts",
      onClick() {},
    },
  ];

  return {
    activeTab,
    profile,
    profilePosts,
    profileStories,
    profileHighlights,
    hasUnseenTray,
    // setProfile,
    // setProfilePosts,
    // setProfileStories,
    // setProfileHighlights,
    // setHasUnseenTray,
    tabItems,
  }
}
