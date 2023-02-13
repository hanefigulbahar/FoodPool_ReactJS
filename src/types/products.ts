export interface Products {
    id: string
    name: string
    phone_number: number
    address: Address
    type: string
    description: string
    cuisines: string[]
    food_photos: string[]
    logo_photos: string[]
    menu: Menu
}

export interface Address {
    city: string
    country: string
}

export interface Menu {
    burgers: Food[]
    friedChickens: Food[]
    souces: Food[]
    desserts: Food[]
    drinks: Food[]
}

export interface Food {
    id: string
    name: string
    image: string
    details: any
    fee: number
}