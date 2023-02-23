import { A, B, C, D, Item } from "./Items"

export function itemFactory(itemChar: string) : Item {
    if (itemChar === 'A') return new A()
    if (itemChar === 'B') return new B()
    if (itemChar === 'C') return new C()
    if (itemChar === 'D') return new D()
    throw new Error("Something bad happened")
}

export enum ItemType {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D'
}