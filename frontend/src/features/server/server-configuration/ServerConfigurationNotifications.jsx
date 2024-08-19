import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import SwitchButton from "@/components/SwitchButton";
import RadioButtonGroup from "@/components/RadioButton/RadioButtonGroup";
import RadioButton from "@/components/RadioButton/RadioButton";
import { v4 as uuidv4 } from "uuid";

const radioButtonList = [
  {
    radioId: "all",
    radioName: "server-notifications",
    radioValue: "all",
    radioLabelText: "Todas",
  },
  {
    radioId: "mentions-only",
    radioName: "server-notifications",
    radioValue: "mentions-only",
    radioLabelText: "Solo menciones @",
  },
  {
    radioId: "nothing",
    radioName: "server-notifications",
    radioValue: "nothing",
    radioLabelText: "Ninguna",
  },
];

const ServerConfigurationNotifications = () => {
  const handleToggleSwitch = () => {
    console.log("click switch");
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-8">Ajustes de notificaciones</h2>
      <section name="mute-server" className="mb-12">
        <div className="flex justify-between items-center">
          <h3 className="text-lg mb-4">Silenciar servidor</h3>
          <SwitchButton
            activeIcon={faClose}
            inactiveIcon={faCheck}
            isActive={true}
            onToggle={handleToggleSwitch}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          cupiditate?
        </p>
      </section>
      <section name="server-notifications" className="">
        <h3 className="text-lg mb-4">Ajustes de notificación del servidor</h3>
        <RadioButtonGroup isLegend={false}>
          {radioButtonList.map((radioButton) => {
            const id = uuidv4();
            return <RadioButton key={id} data={radioButton} />;
          })}
        </RadioButtonGroup>
      </section>
    </div>
  );
};

export default ServerConfigurationNotifications;
