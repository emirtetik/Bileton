import Menu from "./menu";

const SideBar = () => {
  return (
    <aside className="flex flex-col sticky top-0 w-[17rem] bg-black min-h-full h-screen ">
    <Menu/>
    </aside>
  );
};

export default SideBar;
