import { Tabs, Typography, Box } from "@nlmk/ds-2.0";
import { useState } from "react";
import style from "./reportInset.module.css";
import ReportMain from "../../molecules/report-main";

const ReportInset: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs>
        <Tabs.Tab
          label="Выгрузка"
          active={0 === Number(activeTab)}
          onClick={() => setActiveTab(0)}
        />
        <Tabs.Tab
          label="Подъем"
          active={1 === Number(activeTab)}
          onClick={() => setActiveTab(1)}
        />
      </Tabs>

      <Box>
        {Number(activeTab) == 0 && (
          <div className={style.wrapper}>
            <ReportMain />
          </div>
        )}
        {Number(activeTab) == 1 && (
          <Typography variant="Heading4" color="var(--steel-90)">
            Подъем
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ReportInset;
