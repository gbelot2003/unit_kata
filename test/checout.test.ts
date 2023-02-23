import { checkout } from "../src/checkout"

describe('checkout test', () => {
    it('should return 0 when no items are send', () => {
        expect(checkout("")).toBe(0)
    })

    it('should return 50 when sending A', () => {
        expect(checkout("A")).toBe(50)
    })

    it('should return 30 when sending B', () => {
        expect(checkout("B")).toBe(30)
    })

    it('should return 20 when sending C', () => {
        expect(checkout("C")).toBe(20)
    })

    it('should return 15 when sending D', () => {
        expect(checkout("D")).toBe(15)
    })

    it('should return 30 when sending two DD', () => {
        expect(checkout("DD")).toBe(30)
    })

    it('should return 100 when sending two AA', () => {
        expect(checkout("AA")).toBe(100)
    })

    it('should return 115 when sending each', () => {
        expect(checkout("ABCD")).toBe(115)
    })

    it('should return error when sending unknow item', () => {
        expect(() => checkout("Z")).toThrow('Something bad happened')
    })


})