import {  Route, Routes } from "react-router-dom";

import HomeView from "../views/home/pages/HomeView";
import ProfileView from "../views/profile/pages/ProfileView";

import ScrollToTop from "../libs/observer/ScrollToTop";

function App() {
  return (
    <div className="relative w-[375px] bg-white">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path=":username" element={<ProfileView />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
