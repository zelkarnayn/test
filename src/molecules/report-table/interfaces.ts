export interface IData {
    complete: boolean;
    date: string;
    id: number;
    recomendation: string;
    time: string;
    unloading: string;
}

export interface IDataProps {
    data?: IData[]
}