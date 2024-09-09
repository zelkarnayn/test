export interface IReportFilter {
    valueFrom?: Date;
    valueTo?: Date;
    setValueFrom: (from?: Date) => void;
    setValueTo: (to?: Date) => void;
    handleFlag: () => void;
}