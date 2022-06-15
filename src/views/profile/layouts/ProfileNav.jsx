import React from 'react'

function ProfileNav(props) {
  const { children } = props;
  
  return (
    <nav
      id="user-profile-nav"
      className="sticky top-0 left-0 w-full h-auto flex items-center justify-between gap-4 p-4 bg-white"
    >
      {children}
    </nav>
  )
}

export default ProfileNav