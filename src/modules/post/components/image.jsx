function PostImage(props) {
  const { src } = props;
  
  return (
    <img
      alt=""
      className="w-full aspect-square object-cover"
      src={src}
    />
  )
}

export default PostImage