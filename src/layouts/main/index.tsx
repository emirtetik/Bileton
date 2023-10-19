import { Outlet } from "react-router-dom"
import SideBar from "../../components/sidebar"

const MainLayout = () => {
  return (
    <div className="flex w-full ">
        <SideBar/>
        <div className="flex-1">
        <Outlet/>

        </div>
    </div>
  )
}

export default MainLayout