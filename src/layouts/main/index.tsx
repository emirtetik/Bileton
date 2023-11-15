import { Outlet } from "react-router-dom";
import Header from "../../components/sidebar";
import Footer from "../../components/sidebar/footer";

const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen w-full ">
      <div className=" flex ">
        <Header />
      </div>
      <div className="w-full  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
