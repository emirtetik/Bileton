import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar";

const MainLayout = () => {
  return (
    <div className="flex w-full ">
      <div className="">
        <SideBar />
      </div>
      <div className="overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
