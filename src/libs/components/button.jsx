function Button(props) {
  const { children, variant, onClick } = props;

  let classProps
  switch (variant) {
    case "primary":
      classProps = "border-transparent bg-[#1FA1FF]";
      break;
    default:
      classProps = "border-[#CBCBCB]";
  }
  
  return (
    <button
      className={`w-full h-auto block py-1 border rounded ${classProps} transition ease-out duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button