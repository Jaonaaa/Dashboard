import CheckIcon from "../../assets/icons/CheckIcon";
import CrossIcon from "../../assets/icons/CrossIcon";

export const BooleanMark = (value, className = "") => {
  return (
    <>
      {value + "" === "true" ? (
        <div className={"icon_row_table checked " + className}>
          <CheckIcon />
        </div>
      ) : (
        <div className={"icon_row_table unchecked " + className}>
          <CrossIcon />
        </div>
      )}
    </>
  );
};
