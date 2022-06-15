import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop({ children }) {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return <React.Fragment>{children}</React.Fragment>;
}

export default ScrollToTop;
