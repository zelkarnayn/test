import { DatePicker } from "@nlmk/ds-2.0";
import React from "react";
import { IReportFilter } from "../../molecules/report-filter/interfaces";
import style from "./data-picker.module.css";

const DataPicker: React.FC<IReportFilter> = ({
  valueFrom,
  valueTo,
  setValueFrom,
  setValueTo,
}) => {
  return (
    <DatePicker
      size={"xs"}
      className={style.wrapper}
      type="period"
      valueFrom={valueFrom}
      valueTo={valueTo}
      onPeriodChange={(from, to) => {
        setValueFrom(from);
        setValueTo(to);
      }}
    />
  );
};

export default DataPicker;
