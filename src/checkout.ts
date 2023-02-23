import { itemFactory } from "./ItemFactory";

export function checkout(itemsList: string): number {

    let total = 0;
    for (const itemChar of itemsList.split("")) {
        const item = itemFactory(itemChar)
        total += item.getPrice()
    }

    const A_counter = itemsList.split("").filter((item) => item === "A").length;
    total -= Math.trunc(A_counter / 3) * 20;

    const B_counter = itemsList.split("").filter((item) => item === "B").length;
    total -= Math.trunc(B_counter / 2) * 15;

    return total;
}