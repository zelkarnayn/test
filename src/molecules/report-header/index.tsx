import { Header, Icon } from "@nlmk/ds-2.0";
import style from "./header.module.css";

function HeaderTitle() {
  return (
    <div className={style.wrapper}>
      <Header
        title="Отчет по исполнению рекомендаций выгрузки и подъема"
        date
        favorite={() => {}}
        className={style.header}
      />
      <div className={style.icons}>
        <Icon
          name={"IconPrintOutlined24"}
          color="disabled"
          containerSize={32}
        />
        <Icon name={"IconArrowBottom24"} color="disabled" containerSize={32} />
      </div>
    </div>
  );
}

export default HeaderTitle;
