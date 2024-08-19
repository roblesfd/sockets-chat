import { useState } from "react";
import TabsContainer from "@/components/Tabs/TabsContainer";
import Tab from "@/components/Tabs/Tab";
// import { useGetAUserQuery } from "../usersApiSlice";
import { useParams } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
import ProfileConfiguration from "./ProfileConfiguration";
import ProfileFriends from "./ProfileFriends";
import ProfileInfo from "./ProfileInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ProfileMyServers from "./ProfileMyServers";
import ProfileServers from "./ProfileServers";

const Profile = () => {
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [activeTab, setActiveTab] = useState("info");
  // const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // const {
  //   data: userInfo,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetAUserQuery(id);
  // const { username } = useAuth();

  let content = (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Mi Perfil{" "}
        <span className="text-[18px]">
          (
          <FontAwesomeIcon icon={faCircle} className="text-green-400 text-xs" />
          <span className="ml-2">En línea</span>)
        </span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-6 pt-6 h-full">
        <div className="col-span-1 border-r-2 pt-10 ">
          <TabsContainer>
            <Tab
              title="Información de la cuenta"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              data="info"
            />
            {/* {username === userInfo.username && ( */}
            <Tab
              title="Mis amigos"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              data="friends"
            />
            {/* )} */}
            <Tab
              title="Mis servidores"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              data="my-servers"
            />
            <Tab
              title="Servidores"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              data="servers"
            />
            <Tab
              title="Configuración"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              data="settings"
            />
          </TabsContainer>
        </div>
        <div className="col-span-1 md:col-span-5 px-6 py-3">
          {activeTab === "info" && <ProfileInfo />}
          {activeTab === "friends" && <ProfileFriends />}
          {activeTab === "my-servers" && <ProfileMyServers />}{" "}
          {activeTab === "servers" && <ProfileServers />}
          {activeTab === "settings" && <ProfileConfiguration />}
        </div>
      </div>
    </>
  );

  // if (isLoading) {
  //   content = <p className="my-8">Cargando...</p>;
  // }

  // if (isSuccess) {
  // content = (
  //   <>
  //     {username === userInfo.username ? (
  //       <h1 className="text-2xl font-bold mb-4">Mi Perfil</h1>
  //     ) : (
  //       <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
  //     )}
  //     <TabsContainer>
  //       <Tab
  //         title="Información personal"
  //         setActiveTab={setActiveTab}
  //         activeTab={activeTab}
  //         data="info"
  //       />
  //       <Tab
  //         title="Historial de Tickets Resueltos"
  //         setActiveTab={setActiveTab}
  //         activeTab={activeTab}
  //         data="tickets"
  //       />
  //       {username === userInfo.username && (
  //         <Tab
  //           title="Configuración de Cuenta"
  //           setActiveTab={setActiveTab}
  //           activeTab={activeTab}
  //           data="settings"
  //         />
  //       )}
  //     </TabsContainer>
  //     <div className="mt-4">
  //       {activeTab === "info" && <UserProfileInfo userInfo={userInfo} />}
  //       {activeTab === "tickets" && (
  //         <UserProfileTickets tickets={resolvedTickets} />
  //       )}
  //       {activeTab === "settings" && (
  //         <UserProfileSettings userInfo={userInfo} />
  //       )}
  //     </div>
  //   </>
  // );
  // }

  // if (isError) {
  //   content = <p className="my-8 text-red-500">{error?.data?.message}</p>;
  // }

  return <div className="container mx-auto h-full">{content}</div>;
};

export default Profile;
