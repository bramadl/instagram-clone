import PostText from "./caption/Text";
import PostUsername from "./caption/Username";

function PostCaption(props) {
  const { username, caption } = props;
  
  return (
    <p className="mt-1 text-sm">
      <PostUsername username={username} /> &nbsp;
      <PostText caption={caption} />
    </p>
  );
}

export default PostCaption;
