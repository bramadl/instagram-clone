import { trimAtMost } from "../../../../libs/utils/format/string";

function PostText(props) {
  const { caption } = props;

  return (
    <>
      <span>{trimAtMost(caption, 75)}</span> &nbsp;
      {caption.length > 75 && <button className="opacity-50">more</button>}
    </>
  )
}

export default PostText;
