import React from "react";

function ProfileHeader(props) {
  const { profileAvatar, profileInformation, profileBiodata } = props;
  return (
    <header id="user-profile-header" className="flex flex-col gap-2 px-4">
      <div
        id="user-profile-"
        className="flex items-center justify-between gap-8"
      >
        <div id="user-profile-avatar" className="flex-shrink-0">
          {profileAvatar}
        </div>
        <div id="user-profile-information" className="flex-1">
          {profileInformation}
        </div>
      </div>
      <div id="user-profile-biodata">{profileBiodata}</div>
    </header>
  );
}

export default ProfileHeader;
