import { itemFactory, ItemType } from "./ItemFactory";
import { Discount } from "./Discounts";

export function checkout(itemsList: string): number {

    let total = 0;
    for (const itemChar of itemsList.split("")) {
        const item = itemFactory(itemChar)
        total += item.getPrice()
    }

    const discountA = new Discount(ItemType.A, 3, 20)
    total -= discountA.calculateDiscount(itemsList);

    const discountB = new Discount(ItemType.B, 2, 15)
    total -= discountB.calculateDiscount(itemsList);

    return total;
}