import { Icon } from "@nlmk/ds-2.0";
import { IDataProps } from "./interfaces";
import style from "./report-table.module.css";
import EfficiencyGauge from "../gauge-chart";

function Table({ data }: IDataProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.table}>
        <table>
          <tr className={style.newtr}>
            <th className={style.long}>Дата</th>
            <th className={style.short}>Время</th>
            <th className={style.middle}>Рекомендация</th>
            <th className={style.middle}>Выгрузка</th>
            <th className={style.long}>Статус</th>
          </tr>
          {data?.map((item) => (
            <tr key={item.id} className={style.newtr}>
              <td className={style.long}>{item.date}</td>
              <td className={style.short}>{item.time}</td>
              <td className={style.middle}>{item.recomendation}</td>
              <td className={item.complete ? style.middle : style.notcomplete}>
                {item.unloading}
              </td>
              <td className={item.complete ? style.long : style.notlong}>
                {!item.complete ? (
                  <>
                    <Icon
                      name={"IconAddPlusCircleOutlined16"}
                      color="error"
                      containerSize={16}
                    />{" "}
                    Не выполнена
                  </>
                ) : (
                  <>
                    <Icon
                      name={"IconAllDoneDoubleCheckFilled16"}
                      color="success"
                      containerSize={16}
                    />{" "}
                    Выполнена
                  </>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <EfficiencyGauge />
    </div>
  );
}

export default Table;
