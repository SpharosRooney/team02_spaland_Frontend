export interface mainEventListType {
    id: number;
    title: string;
    eventId: number;
}

export interface BestListType {
    id: number;
    title: string;
}

export interface ProductListCardType {
    id: number;
    title: string;
    price: number;
    imgUrl: string;
    isNew: boolean;
}

export interface tagListCardType {
    id: number;
    title: string;
    imgUrl: string;
}

export interface eventProductListType {
    id: number;
    eventId: number;
    productId: number;
}

export interface bestProductListType {
    id: number;
    bestId: number;
    productId: number;
}

export interface tagListCardType {
    id: number;
    eventId: number;
    tagId: number;
}


export interface eventProductListCardType {
    id: number;
    name: string;
    discription: string;
    price: number;
    inventory: number;
    titleImg: string;
    productImageList: Array<string>;
    frozen: number;
}


export interface eventProductType {
    id: number;
    name: string;
    description: string;
    price: number;
    inventory: number;
    titleImg: string;
    productImageList: Array<productImageListType>;
    frozen: number;
    salesQuantity: number;
}

export interface productImageListType {
    id: number;
    imgUrl: string;
    imgAlt: string;
    productImageList: [
        {
            id: number;
            imgUrl: string;
            imgAlt: string;
        }
    ],
    frozen: number;
    salesQuantity: number;
}