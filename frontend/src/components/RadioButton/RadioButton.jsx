const RadioButton = ({ data }) => {
  const { radioId, radioName, radioValue, radioLabelText } = data;
  return (
    <div className="text-primary-600 dark:text-primary-30">
      <input
        type="radio"
        id={radioId}
        name={radioName}
        value={radioValue}
        className="mr-3"
      />
      <label htmlFor={radioId}> {radioLabelText}</label>
    </div>
  );
};

export default RadioButton;
