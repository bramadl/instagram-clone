import { useParams } from "react-router";

import useHomeView from "../../home/hooks/useHomeView";

import AccountProfileView from "./AccountProfileView";
import PersonalProfileView from "./PersonalProfileView";

function ProfileView() {
  const { profile } = useHomeView(1)
  const { username } = useParams();

  if (profile.username) {
    if (profile.username === username) {
      return <PersonalProfileView />
    } else {
      return <AccountProfileView />
    }
  }
}

export default ProfileView;
