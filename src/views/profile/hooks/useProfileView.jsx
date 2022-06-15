import { useEffect, useState } from "react";
import GridIcon from "../../../libs/components/icons/GridIcon";
import MentionIcon from "../../../libs/components/icons/MentionIcon";
import accountRepo from "../../../modules/account/repository";
import getHighlights from "../../../modules/account/services/getHighlights";
import getPosts from "../../../modules/account/services/getPosts";
import viewProfile from "../../../modules/account/services/viewProfile";
import viewStory from "../../../modules/account/services/viewStory";

const defaultTabs = [
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

export default function useProfileView(id, profileTabs = defaultTabs) {
  const [activeTab] = useState("Posts");
  const [profile, setProfile] = useState({});
  const [profilePosts, setProfilePosts] = useState([]);
  const [profileStories, setProfileStories] = useState([]);
  const [profileHighlights, setProfileHighlights] = useState([]);
  const [hasUnseenTray, setHasUnseenTray] = useState(false);

  useEffect(() => {
    viewProfile(accountRepo, { id })
      .then((profile) => setProfile(profile))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getPosts(accountRepo, { id })
      .then((posts) => setProfilePosts(posts))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    viewStory(accountRepo, { id })
      .then((stories) => {
        setProfileStories(stories);
        setHasUnseenTray(stories.some((story) => story.isWatched));
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getHighlights(accountRepo, { id })
      .then((highlights) => setProfileHighlights(highlights))
      .catch((error) => console.log(error));
  }, [id]);

  const tabItems = [...profileTabs];

  return {
    activeTab,
    profile,
    profilePosts,
    profileStories,
    profileHighlights,
    hasUnseenTray,
    tabItems,
  };
}
