import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarChannel from "../features/server/SidebarChannels";
import SidebarMemberList from "../features/server/SidebarMemberList";

const MainLayout = () => {
  const pathName = location.pathname;
  const isNotServerConfigPage = !pathName.match(
    /servidores\/\d+\/configuracion/
  );
  const isNotExploreFriendsPage = !pathName.includes("explorar-amigos");
  const isNotExploreServersPage = !pathName.includes("explorar-servidores");
  const isNotHomePage = !pathName.includes("inicio");

  // Evalua si la url de la pagina actua no corresponde a alguna del array
  const evaluatePageUrls = [
    isNotServerConfigPage,
    isNotExploreFriendsPage,
    isNotExploreServersPage,
    isNotHomePage,
  ].every((urlEval) => urlEval === true);

  return (
    <div className="text-primary-900 dark:text-primary-40 ">
      {/* main */}
      {isNotServerConfigPage && <Navbar />}
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-1">
          {/* 1 left sidebar */}
          {isNotServerConfigPage && <Sidebar />}
        </div>
        <div className="col-span-2">
          {evaluatePageUrls && <SidebarChannel />}
        </div>
        <div className="h-screen col-span-7 overflow-x-scroll ">
          {/* 2 left sidebar */}
          <Outlet />
        </div>
        {/* right sidebar */}
        <div className="col-span-2">
          {evaluatePageUrls && <SidebarMemberList />}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
