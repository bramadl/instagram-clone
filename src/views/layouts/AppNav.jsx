function AppNav(props) {
  const { id, children } = props;
  
  return (
    <nav
      id={id}
      className="sticky top-0 left-0 w-full h-auto flex items-center justify-between gap-4 p-4 bg-white"
    >
      {children}
    </nav>
  )
}

export default AppNav