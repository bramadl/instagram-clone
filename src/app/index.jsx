import {  Route, Routes } from "react-router-dom";

import HomeView from "../views/home/pages/HomeView";
import ProfileView from "../views/profile/pages/ProfileView";

import GlobalNav from "../libs/components/GlobalNav";
import ScrollToTop from "../libs/observer/ScrollToTop";

function App() {
  return (
    <div className="relative w-[375px] h-[812px] bg-white overflow-hidden">
      <div id="page" className="w-full h-full overflow-auto pb-16">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path=":username" element={<ProfileView />} />
          </Routes>
        </ScrollToTop>
      </div>

      <GlobalNav />
    </div>
  );
}

export default App;
