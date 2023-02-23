const A_PRICE = 50;
const B_PRICE = 30;
const C_PRICE = 20;
const D_PRICE = 15;

interface Item {
    getPrice(): number
}

class A implements Item {
    getPrice(): number {
        return A_PRICE
    }
}

class B implements Item {
    getPrice(): number {
        return B_PRICE
    }
}

class C implements Item {
    getPrice(): number {
        return C_PRICE
    }
}

class D implements Item {
    getPrice(): number {
        return D_PRICE
    }
}

function itemFactory(itemChar: string) : Item {
    if (itemChar === 'A') return new A()
    if (itemChar === 'B') return new B()
    if (itemChar === 'C') return new C()
    if (itemChar === 'D') return new D()
    throw new Error("Something bad happened")
}

export function checkout(itemsList: string): number {

    let total = 0;
    for (const itemChar of itemsList.split("")) {
        const item = itemFactory(itemChar)
        total += item.getPrice()
    }

    return total;
}