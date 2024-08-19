const Tab = ({ title, setActiveTab, activeTab, data }) => {
  return (
    <button
      className={`p-2 text-left ${
        activeTab === data
          ? "border-b-2 border-primary-500 text-primary-500 bg-primary-30"
          : ""
      }`}
      onClick={() => setActiveTab(data)}
    >
      {title}
    </button>
  );
};

export default Tab;
