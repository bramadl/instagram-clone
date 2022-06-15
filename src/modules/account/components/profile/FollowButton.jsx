import Button from "../../../../libs/components/Button";

function EditButton(props) {
  const { isFollowing, onClick } = props;
  
  return (
    <Button variant={!isFollowing && "primary"} onClick={onClick}>
      <span className={`font-bold text-sm ${!isFollowing && "text-white"} transition ease-out duration-300`}>
        {isFollowing ? "Following" : "Follow"}
      </span>
    </Button>
  );
}

export default EditButton;
