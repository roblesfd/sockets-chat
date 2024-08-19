const TabsContainer = ({ children }) => {
  return (
    <div>
      <div className="border-b flex flex-col">{children}</div>
    </div>
  );
};

export default TabsContainer;
