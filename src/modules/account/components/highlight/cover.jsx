import React from "react";
import Avatar from "../../../../libs/components/Avatar";
import Tray from "../../../story/Tray";

function Cover(props) {
  const { name, cover } = props;
  
  return (
    <>
      <Tray hasUnseenTray={false}>
        <Avatar alternate={name} src={cover} size="lg" />
      </Tray>
      <p className="text-sm">{name}</p>
    </>
  );
}

export default Cover;
