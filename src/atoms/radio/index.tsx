import { Radio } from "@nlmk/ds-2.0";
import React, { useState } from "react";
import { IReportFilter } from "../../molecules/report-filter/interfaces";

const RadioGroup: React.FC<Pick<IReportFilter, "handleFlag">> = ({
  handleFlag,
}) => {
  const [checked, setChecked] = useState("yes");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChecked(event.target.value);
    handleFlag();
  };
  return (
    <>
      <Radio
        checked={checked === "yes"}
        onChange={handleChange}
        value="yes"
        label="Открытый склад 1"
      />
      <Radio
        checked={checked === "no"}
        onChange={handleChange}
        value="no"
        label="Открытый склад 2"
      />
    </>
  );
};

export default RadioGroup;
