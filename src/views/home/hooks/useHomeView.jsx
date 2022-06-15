import { useEffect, useState } from "react";

import accountRepo from "../../../modules/account/repository/";
import viewProfile from "../../../modules/account/services/viewProfile";

import postsRepo from "../../../modules/post/repository/";
import getPostsForHome from "../../../modules/post/services/getPostsForHome";

import storyRepo from "../../../modules/story/repository/";
import getStoriesByUserId from "../../../modules/story/services/getStoriesByUserId";
import getStoriesForHome from "../../../modules/story/services/getStoriesForHome";

export default function useHomeView(id) {
  const [profile, setProfile] = useState({});
  const [profileStories, setProfileStories] = useState([]);
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    viewProfile(accountRepo, { id })
      .then((profile) => setProfile(profile))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getStoriesByUserId(storyRepo, { id })
      .then((profileStories) => setProfileStories(profileStories))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getStoriesForHome(storyRepo, { id })
      .then((stories) => setStories(stories))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getPostsForHome(postsRepo, { id })
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error));
  }, [id]);

  return {
    profile,
    profileStories,
    stories,
    posts,
  };
}
