export interface carousel{
    image:string,
    text:string
}

export interface category{
    name:string,
    image:string,
    productCount:number,
    altText:string
}

export interface weekTrending{
    id:number,
    image:string,
    name:string,
    brand:string,
    salePrice:number | null,
    mrp:number,
    discount: number | undefined
}

export interface topSelling{
    image:string,
    name:string,
    brand:string,
    salePrice:number | null,
    mrp:number,
    discount: number | undefined
}

export interface cartItem{
    id:number,
    image:string,
    name:string,
    brand:string,
    salePrice:number | null,
    mrp:number,
    discount: number | undefined
    quantity:number
}

export interface login{
    loginEmail:string,
    loginPassword:string
}

export interface order{
    firstName:string,
    lastName:string,
    mobile:string,
    email:string,
    billAdd1:string | null,
    billAdd2:string | null,
    billAdd3:string | null,
    billCity:String | null,
    billState:String | null,
    shipAdd1:string | null,
    shipAdd2:string | null,
    shipAdd3:string | null,
    shipCity:String | null,
    shipState:String | null,
    products:[],
    finalTotal:number
}