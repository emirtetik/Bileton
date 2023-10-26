import { useState } from "react";
import { Outlet } from "react-router-dom"
import SideBar from "../../components/sidebar"

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full ">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="flex-1">
        <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout
