import React from "react";

function Information(props) {
  const {
    postsCount,
    followersCount,
    followingCount,
  } = props;
  
  return (
    <ul className="flex items-center justify-start gap-8">
      <InformationItem itemValue={postsCount} itemLabel="Posts" />
      <InformationItem itemValue={followersCount} itemLabel="Followers" />
      <InformationItem itemValue={followingCount} itemLabel="Following" />
    </ul>
  );
}

function InformationItem(props) {
  const { itemValue, itemLabel } = props;
  
  return (
    <li className="flex flex-col items-center justify-center">
      <p className="font-bold text-base">{itemValue}</p>
      <p className="font-light text-xs">{itemLabel}</p>
    </li>
  )
}

export default Information;
