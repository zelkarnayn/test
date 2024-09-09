import { Button, Icon } from "@nlmk/ds-2.0";
import RadioGroup from "../../atoms/radio";
import DataPicker from "../../atoms/data-picker";
import Toogle from "../../atoms/toogle";
import style from "./reportfilter.module.css";
import { IReportFilter } from "./interfaces";

function ReportFilter({
  valueFrom,
  valueTo,
  setValueFrom,
  setValueTo,
  handleFlag,
}: IReportFilter): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.radio}>
        <RadioGroup handleFlag={handleFlag} />
      </div>
      <div className={style.filter}>
        <DataPicker
          handleFlag={handleFlag}
          valueFrom={valueFrom}
          valueTo={valueTo}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
        />
        <Toogle handleFlag={handleFlag} />
        <Button size="s" onClick={handleFlag}>
          <Icon
            name="IconAutoRenewReloadOutlined32"
            color="secondary"
            containerSize={32}
          />
        </Button>
      </div>
    </div>
  );
}

export default ReportFilter;
