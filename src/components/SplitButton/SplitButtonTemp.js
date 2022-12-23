import { SplitButton } from "primereact/splitbutton";

export const splitButtonTemp = (
  rowData,
  { defaultFunc, defaultLabel, defaultIcon, defaultColor, defaultDisabled },
  buttonTemplate
) => {
  /** @defaultFunc => */
  // */
  return (
    <div className=" flex justify-center text-center">
      <SplitButton
        className={`p-button-raised p-button-rounded ${
          defaultColor || "p-button-success"
        }`}
        label={defaultLabel || "Action"}
        icon={defaultIcon}
        onClick={() => defaultFunc && defaultFunc(rowData)}
        model={buttonTemplate}
        disabled={defaultDisabled || false}
      ></SplitButton>
    </div>
  );
};

export default splitButtonTemp;
