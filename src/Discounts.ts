import { ItemType } from "./ItemFactory";

export class Discount {
    constructor(private itemType: ItemType, private quantity: number, private discount: number) { }

    calculateDiscount(itemsList: string): number {
        const counter = itemsList.split("").filter((item) => item === this.itemType).length;
        return Math.trunc(counter / this.quantity) * this.discount;
    }
}