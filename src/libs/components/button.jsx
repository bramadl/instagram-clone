import React from 'react'

function Button(props) {
  const { children } = props;
  
  return (
    <button className="w-full h-auto block py-1 border border-[#CBCBCB] rounded">
      {children}
    </button>
  )
}

export default Button