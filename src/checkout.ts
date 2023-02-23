const A_PRICE = 50;
const B_PRICE = 30;
const C_PRICE = 20;
const D_PRICE = 15;

export function checkout(itemsList: string): number {

    let total = 0;
    for (const item of itemsList.split("")) {
        if (item === 'A') total += A_PRICE
        else if (item === 'B') total += B_PRICE
        else if (item === 'C') total += C_PRICE
        else if (item === 'D') total += D_PRICE
        else throw Error("Something bad happened")
    }

    return total;
}