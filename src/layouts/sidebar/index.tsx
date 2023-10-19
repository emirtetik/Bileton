import Menu from "./menu";

const SideBar = () => {
  return (
    <aside className="flex flex-col sticky top-0 w-[17.188rem] bg-[#1c212c] min-h-full h-screen ">
    <Menu/>
    </aside>
  );
};

export default SideBar;
