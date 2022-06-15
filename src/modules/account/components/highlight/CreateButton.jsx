function CreateButton() {
  return (
    <>
      <button className="w-16 h-16 flex items-center justify-center rounded-full border border-[#DCDCDC]">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10.1666"
            y1="1"
            x2="10.1666"
            y2="19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1.5"
            y1="10.167"
            x2="19.5"
            y2="10.167"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <p className="text-sm">New</p>
    </>
  );
}

export default CreateButton;
