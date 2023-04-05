export interface cartListType {
    cartId: number;
    productId: number;
    titleImg: string;
    price: number;
    name: string;
    fronzen: boolean;
    productAmount: number;
    check: boolean;
}

export interface cartType {
    cartListFreeze: cartListType[];
    cartList: cartListType[];
}