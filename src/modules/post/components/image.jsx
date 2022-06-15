function PostImage(props) {
  const { aspectRatio, src } = props;
  const aspectRatioClass = aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]"
  
  return (
    <img
      alt=""
      className={`flex-shrink-0 w-full object-cover ${aspectRatioClass}`}
      src={src}
    />
  )
}

export default PostImage