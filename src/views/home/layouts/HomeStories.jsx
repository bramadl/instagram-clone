import React from "react";
import TrayWithCover from "../../../modules/story/components/TrayWithCover";
import useHomeView from "../hooks/useHomeView";

function HomeStories(props) {
  const { profile, profileStories } = useHomeView(1);
  const { children } = props;
  
  return (
    <ul
      id="home-stories"
      className="flex items-center gap-4 overflow-auto px-4 pb-2 border-b border-[#DADADA]"
    >
      <li className="flex-shrink-0 flex flex-col items-center gap-1">
        <TrayWithCover
          account={profile}
          stories={profileStories}
          username="Your Story"
        />
      </li>
      {children}
    </ul>
  );
}

export default HomeStories;
