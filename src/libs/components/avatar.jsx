function Avatar(props) {
  const { alternate, src, size, useBorder = true } = props;

  let avatarSize
  switch (size) {
    case "xl":
      avatarSize = "w-20 h-20";
      break;
    case "lg":
      avatarSize = "w-16 h-16";
      break;
    case "sm":
      avatarSize = "w-8 h-8";
      break;
    case "xs":
      avatarSize = "w-6 h-6";
      break;
    default:
      avatarSize = "";
  }
  
  return (
    <img
      alt={alternate}
      className={`${useBorder && "border-2 border-white"} ${avatarSize} rounded-full object-cover`}
      src={src}
    />
  );
}

export default Avatar;
