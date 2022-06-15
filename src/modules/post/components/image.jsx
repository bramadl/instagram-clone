function PostImage(props) {
  const { aspectRatio = "square", src } = props;
  const aspectRatioClass = aspectRatio !== "square" ? "aspect-[4/5]" : "aspect-square";
  
  return (
    <img
      alt=""
      className={`flex-shrink-0 w-full object-cover ${aspectRatioClass}`}
      src={src}
    />
  )
}

export default PostImage