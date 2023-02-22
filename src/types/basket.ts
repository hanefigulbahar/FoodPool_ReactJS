
export interface Basket {
    map?: any
    basketStatus?: boolean
    baskets: BasketItem[]

}
export interface BasketItem {
    id: string
    name: string
    image: string
    fee: number
    amount: number
}
