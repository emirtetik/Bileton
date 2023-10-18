import { Outlet } from "react-router-dom"
import SideBar from "../sidebar"

const MainLayout = () => {
  return (
    <div className="w-full flex gap-3">
        <SideBar/>
        <div className="flex-1">
        <Outlet/>

        </div>
    </div>
  )
}

export default MainLayout