import React from "react";

function Biodata(props) {
  const { username, biodata, website } = props;
  
  return (
    <div>
      <h2 className="font-bold text-sm">{username}</h2>
      <div className="font-light text-sm leading-tight line-clamp-2">{biodata}</div>
      {website && <a className="font-light text-sm text-[#004C8B]" href={website}>{website}</a>}
    </div>
  );
}

export default Biodata;
