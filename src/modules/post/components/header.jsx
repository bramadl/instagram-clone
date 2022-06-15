import Avatar from "../../../libs/components/Avatar";

import MenuButton from "./interactor/MenuButton";

function PostHeader(props) {
  const { account } = props;

  return (
    <header
      id="post-header"
      className="flex items-center justify-between p-4"
    >
      <div className="flex items-center gap-3">
        <Avatar
          alternate={account.username}
          src={account.avatar}
          size="sm"
          useBorder={false}
        />
        <h2 className="font-bold text-sm">{account.username}</h2>
      </div>
      
      <MenuButton />
    </header>
  );
}

export default PostHeader;
