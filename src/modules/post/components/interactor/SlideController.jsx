function SlideController(props) {
  const { isActive } = props;
  const activeClass = isActive ? "bg-[#32B5FF]" : "bg-[#C4C4C4]";
  
  return <button className={`w-1.5 h-1.5 rounded-full ${activeClass}`} />;
}

export default SlideController;
