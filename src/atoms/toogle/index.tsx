import { Switch } from "@nlmk/ds-2.0";
import { useState } from "react";
import { IReportFilter } from "../../molecules/report-filter/interfaces";

function Toogle({ handleFlag }: Pick<IReportFilter, "handleFlag">) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
        handleFlag();
      }}
      label="Месяцы"
    />
  );
}

export default Toogle;
