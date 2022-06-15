import ChevronDownIcon from "../../../../libs/components/icons/ChevronDownIcon";

function UsernameDropdown(props) {
  const { username } = props;

  return (
    <button className="flex items-center gap-2">
      <h1 className="font-bold text-xl">{username}</h1>
      <ChevronDownIcon />
    </button>
  );
}

export default UsernameDropdown;
