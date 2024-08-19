const RadioButtonGroup = ({ children, isLegend }) => {
  return (
    <fieldset>
      {isLegend && <legend>Selecciona una opción</legend>}
      {children}
    </fieldset>
  );
};

export default RadioButtonGroup;
