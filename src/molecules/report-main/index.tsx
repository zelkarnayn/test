import { createContext, useEffect, useState } from "react";
import ReportFilter from "../report-filter";
import { randomData } from "../../utils/randomData";
import Table from "../report-table";
import { IData } from "../report-table/interfaces";
import style from "./report-main.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export const percentContext = createContext<number | undefined>(0);

function ReportMain() {
  const [valueFrom, setValueFrom] = useState<Date | undefined>(new Date());
  const [valueTo, setValueTo] = useState<Date | undefined>(new Date());
  const [flag, setFlag] = useState<boolean>(true);
  const [data, setData] = useState<IData[] | undefined>();
  const [percent, setPercent] = useState<number | undefined>(0);

  useEffect(() => {
    const newData = randomData(valueFrom, valueTo)?.data;
    setData(newData);
    let newPercent = 0;

    if (newData) {
      newPercent =
        (7.7 *
          newData?.reduce((acc, item) => {
            if (item.complete) {
              acc++;
            }
            return acc;
          }, 0)) /
        100;
    }

    const rounded = parseFloat(newPercent.toFixed(2));
    setPercent(rounded);
  }, [flag, valueFrom, valueTo]);

  const handleFlag = () => {
    setFlag(!flag);
  };

  return (
    <div className={style.wrapper}>
      <percentContext.Provider value={percent}>
        <ReportFilter
          valueFrom={valueFrom}
          valueTo={valueTo}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
          handleFlag={handleFlag}
        />
        <Table data={data} />
      </percentContext.Provider>
    </div>
  );
}

export default ReportMain;
