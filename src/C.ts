import { Item } from "./items";
const C_PRICE = 20;

export class C implements Item {
    getPrice(): number {
        return C_PRICE
    }
}
