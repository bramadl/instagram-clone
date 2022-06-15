function Tabs(props) {
  const { activeTab, tabItems } = props;

  if (!tabItems || !tabItems.length) return;
  
  return (
    <div className="flex items-center justify-between">
      {tabItems.map((tabItem, index) => (
        <button
          key={index}
          className={`flex-1 h-12 flex items-center justify-center border-b-2 ${
            activeTab === tabItem.name ? "border-black" : "border-transparent opacity-50"
          } transition ease-out duration-300`}
          onClick={tabItem.onClick}
        >
          {tabItem.element}
        </button>
      ))}
    </div>
  )
}

export default Tabs