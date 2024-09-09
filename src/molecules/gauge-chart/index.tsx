import { useContext } from "react";
import GaugeChart from "react-gauge-chart";
import { percentContext } from "../report-main";
import style from "./gauge-chart.module.css";

const EfficiencyGauge = () => {
  const value = useContext(percentContext);

  return (
    <GaugeChart
      className={style.gauge}
      id="gauge-chart1"
      nrOfLevels={3}
      percent={value}
      colors={["#FF5F6D", "#FFC371", "#00FF00"]}
      arcWidth={0.1}
      textColor="#000000"
    />
  );
};

export default EfficiencyGauge;
