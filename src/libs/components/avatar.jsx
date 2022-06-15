function Avatar(props) {
  const { alternate, src, size } = props;

  let avatarSize
  switch (size) {
    case "xl":
      avatarSize = "w-20 h-20";
      break;
    case "lg":
      avatarSize = "w-16 h-16";
      break;
    default:
      avatarSize = "";
  }
  
  return (
    <img
      alt={alternate}
      className={`border-2 border-white ${avatarSize} rounded-full object-cover`}
      src={src}
    />
  );
}

export default Avatar;
