import { Link } from "react-router-dom";

import Avatar from "../../../libs/components/Avatar";

import MenuButton from "./interactor/MenuButton";

function PostHeader(props) {
  const { account } = props;

  return (
    <header
      id="post-header"
      className="flex items-center justify-between p-4"
    >
      <Link className="flex items-center gap-3" to={`/${account.username}`}>
        <Avatar
          alternate={account.username}
          src={account.avatar}
          size="sm"
          useBorder={false}
        />
        <h2 className="font-bold text-sm">{account.username}</h2>
      </Link>
      
      <MenuButton />
    </header>
  );
}

export default PostHeader;
