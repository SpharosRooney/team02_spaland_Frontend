export interface bottomNavMenuType {
    id: number;
    name : string;
    link: string;
}

export interface headerIconMenuType{
    id: number;
    name: string;
    link: string;
    icon: string;
}

export interface subNavMenuType {
    id: number;
    name : string;
    description : string;
    imgUrl : string;
    imgAlt : string;
    startDate : string;
    endDate : string;
    discountRate : number;
    isDisplay : boolean;
}

export interface bestsubMenuType {
    id: number;
    name : string;
    description : string;
    price : number;
    inventory : number;
    titleImg : string;
    frozen : number;
    salesQuantity : number;
}