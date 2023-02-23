import { Store } from "../src/checkout"

describe('checkout test', () => {
    const store = new Store()
    
    it('should return 0 when no items are send', () => {
        expect(store.checkout("")).toBe(0)
    })

    it('should return 50 when sending A', () => {
        expect(store.checkout("A")).toBe(50)
    })

    it('should return 30 when sending B', () => {
        expect(store.checkout("B")).toBe(30)
    })

    it('should return 20 when sending C', () => {
        expect(store.checkout("C")).toBe(20)
    })

    it('should return 15 when sending D', () => {
        expect(store.checkout("D")).toBe(15)
    })

    it('should return 30 when sending two DD', () => {
        expect(store.checkout("DD")).toBe(30)
    })

    it('should return 100 when sending two AA', () => {
        expect(store.checkout("AA")).toBe(100)
    })

    it('should return 115 when sending each', () => {
        expect(store.checkout("ABCD")).toBe(115)
    })

    it('should return error when sending unknow item', () => {
        expect(() => store.checkout("Z")).toThrow('Something bad happened')
    })

    it('should apply a discount when having 3 As', () => {
        expect(store.checkout("AAA")).toBe(130)
    })

    it('should apply twice the discount when having 8 As', () => {
        expect(store.checkout("AAAAAAAA")).toBe(360)
    })

    it('should apply a discount when having 3 Bs', () => {
        expect(store.checkout("BBB")).toBe(75)
    })

})