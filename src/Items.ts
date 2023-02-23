import { Item } from "./Item.interface";
const A_PRICE = 50;
const B_PRICE = 30;
const C_PRICE = 20;
const D_PRICE = 15;

export class A implements Item {
    getPrice(): number {
        return A_PRICE
    }
}

export class B implements Item {
    getPrice(): number {
        return B_PRICE
    }
}

export class C implements Item {
    getPrice(): number {
        return C_PRICE
    }
}

export class D implements Item {
    getPrice(): number {
        return D_PRICE
    }
}
