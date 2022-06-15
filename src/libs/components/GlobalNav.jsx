import React from "react";
import { Link } from "react-router-dom";

import useHomeView from "../../views/home/hooks/useHomeView";

import Avatar from "./Avatar";
import ExploreIcon from "./icons/ExploreIcon";
import HomeIcon from "./icons/HomeIcon";
import ReelsIcon from "./icons/ReelsIcon";
import ShopIcon from "./icons/ShopIcon";

function GlobalNav() {
  const {
    profile: { username, avatar },
  } = useHomeView(1);

  return (
    <nav className="absolute bottom-0 left-0 w-full h-16 flex items-center justify-center bg-white border-t border-[#DADADA] p-4">
      <ul className="flex-1 flex items-center justify-between">
        <li>
          <Link to="/">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <ExploreIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <ReelsIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <ShopIcon />
          </Link>
        </li>
        <li>
          <Link to={`/${username}`}>
            <Avatar
              alternate={username}
              src={avatar}
              size="xs"
              useBorder={false}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNav;
