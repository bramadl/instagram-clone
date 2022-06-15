function GlobalHeader(props) {
  const { id, children } = props;
  
  return (
    <header
      id={id}
      className="sticky z-10 top-0 left-0 w-full h-auto flex items-center justify-between gap-4 p-4 bg-white"
    >
      {children}
    </header>
  )
}

export default GlobalHeader