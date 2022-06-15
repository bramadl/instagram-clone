import DotsIcon from "../../../../libs/components/icons/DotsIcon";
import HamburgerIcon from "../../../../libs/components/icons/HamburgerIcon";

function MenuButton(props) {
  const { iconType } = props;
  const iconElement = iconType === "dots" ? <DotsIcon /> : <HamburgerIcon />;
  
  return (
    <button>
      {iconElement}
    </button>
  );
}

export default MenuButton;
