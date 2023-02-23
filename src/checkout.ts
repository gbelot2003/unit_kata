import { itemFactory } from "./ItemFactory";

export function checkout(itemsList: string): number {

    let total = 0;
    for (const itemChar of itemsList.split("")) {
        const item = itemFactory(itemChar)
        total += item.getPrice()
    }

    return total;
}