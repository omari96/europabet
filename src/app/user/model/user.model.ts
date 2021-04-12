export interface User {
    id: number;
    name: string;
    lastName: string;
    gender: string;
    pid: number;
    mobNum: number;
    country: string;
    city: string;
    address: string;
}


export interface Paging {
    page: number;
    pageSize: number;
}