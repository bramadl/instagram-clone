import Avatar from "../../../libs/components/Avatar";
import { toLowerCase } from "../../../libs/utils/format/string";

import Tray from "./Tray";

function TrayWithCover(props) {
  const { account, stories, username } = props;
  
  return (
    <>
      <Tray hasUnseenTray={stories.some((story) => !story.isWatched)}>
        <Avatar
          alternate={account.username}
          src={account.avatar}
          size="lg"
        />
      </Tray>
      <p className="text-sm">{toLowerCase(username || account.username)}</p>
    </>
  );
}

export default TrayWithCover;
