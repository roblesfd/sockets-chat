import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/*
[]                -Mostrar y Gestionar permisos por rol
[]                -Canales (CRUD)
[]                -Activar uso de reacciones
[]                -Activar envio de archivos 
[]                -Activar envio de mensajes
[]                -Activar envio de enlaces
[]                -Ver registro de actividad
[]                -Invitaciones (CRUD)
[]                -Gestion de miembros (añadir y eliminar)
[]                -Asignar roles a miembros (miembro, moderador)
*/

const generalRoles = [
  {
    name: "Reacciones a mensajes",
    value: false,
  },
  {
    name: "Envio de archivos",
    value: false,
  },
  {
    name: "Envio de mensajes de texto",
    value: false,
  },

  {
    name: "Envio de enlaces",
    value: false,
  },
];

const modRoles = [
  {
    name: "Puede ver el registro de actividad",
    value: false,
  },
  {
    name: "Puede nombrar moderadores",
    value: false,
  },
  {
    name: "Puede gestionar miembros",
    value: false,
  },
  {
    name: "Puede gestionar canales",
    value: false,
  },
  {
    name: "Puede gestionar invitaciones",
    value: false,
  },
];

const channelRoles = [
  { name: "Puede crear canales", value: false },
  { name: "Puede editar canales", value: false },
  { name: "Puede eliminar canales", value: false },
];

const invitationRoles = [
  {
    name: "Puede generar enlaces de invitación",
    value: false,
  },
  {
    name: "Puede ver los enlaces de invitación existentes",
    value: false,
  },
  {
    name: "Puede eliminar enlaces de invitación",
    value: false,
  },
];

const memberRoles = [
  {
    name: "Puede silenciar miembros",
    value: false,
  },
  {
    name: "Puede remover miembros",
    value: false,
  },
  {
    name: "Puede desactivar el silencio de miembros",
    value: false,
  },
];

const members = [
  {
    username: "nombre",
    roles: "owner",
    avatar: "",
    status: "online",
  },
];

const displayCheckList = (permissions) => {
  const permissionList = permissions.map((permission) => {
    const id = uuidv4();
    return (
      <li
        key={id}
        className="flex justify-between items-center mb-1 p-1 hover:bg-primary-30 dark:hover:bg-primary-300"
      >
        <label htmlFor={permission.name}>{permission.name}</label>
        <input
          type="checkbox"
          id={permission.name}
          name={permission.name}
          // checked={rol.value}
          // onChange={() => {
          //   setModRoleValues([
          //     ...modRoleValues,
          //     {
          //       name: rol.name,
          //       value: !rol.value,
          //     },
          //   ]);
          // }}
        />
      </li>
    );
  });
  return permissionList;
};

const handleSaveChanges = () => {
  console.log("Saved changes");
};

const ServerConfigurationRoles = () => {
  const [modRoleValues, setModRoleValues] = useState(modRoles);

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-5 md:mb-8">Permisos por rol</h2>
      <section name="mod-roles" className="mb-12">
        <h3 className="text-lg font-semibold mb-4">General</h3>
        <ul className="text-primary-90 w-full md:w-2/3">
          {displayCheckList(generalRoles)}
        </ul>
      </section>
      <section name="mod-roles" className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Moderadores</h3>
        <ul className="text-primary-90 w-full md:w-2/3">
          {displayCheckList(modRoles)}
        </ul>
      </section>
      <section name="member-roles" className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Gestión de Miembros</h3>
        <ul className="text-primary-90 w-full md:w-2/3">
          {displayCheckList(memberRoles)}
        </ul>
      </section>
      <section name="channel-roles" className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Canales</h3>
        <ul className="text-primary-90 w-full md:w-2/3">
          {displayCheckList(channelRoles)}
        </ul>
      </section>
      <section name="invitation-roles" className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Invitaciones</h3>
        <ul className="text-primary-90 w-full md:w-2/3">
          {displayCheckList(invitationRoles)}
        </ul>
      </section>
      <div className="text-right mt-6 md:mt-12">
        <button
          className="text-primary-30  bg-primary-400 hover:bg-primary-500 dark:bg-primary-200  rounded px-3 py-2 text-md"
          title="guardar"
          onClick={handleSaveChanges}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default ServerConfigurationRoles;
