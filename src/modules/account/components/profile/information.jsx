import React from "react";

function Information(props) {
  const {
    postsCount,
    followersCount,
    followingCount,
  } = props;
  
  return (
    <ul className="flex items-center justify-start gap-8">
      <li>
        <InformationItem itemValue={postsCount} itemLabel="Posts" />
      </li>
      <li>
        <InformationItem itemValue={followersCount} itemLabel="Followers" />
      </li>
      <li>
        <InformationItem itemValue={followingCount} itemLabel="Following" />
      </li>
    </ul>
  );
}

function InformationItem(props) {
  const { itemValue, itemLabel } = props;
  
  return (
    <button className="flex flex-col items-center justify-center">
      <p className="font-bold text-base">{itemValue}</p>
      <p className="font-light text-xs">{itemLabel}</p>
    </button>
  )
}

export default Information;
