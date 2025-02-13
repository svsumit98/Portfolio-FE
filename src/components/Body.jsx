import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Body() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1f1f1f] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body;
