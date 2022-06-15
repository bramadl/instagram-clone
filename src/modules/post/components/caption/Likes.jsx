import { toDoublePrecision } from "../../../../libs/utils/format/number";

function PostLikes(props) {
  const { likesCount } = props;

  return <p className="font-bold text-sm">{toDoublePrecision(likesCount)} likes</p>;
}

export default PostLikes;
