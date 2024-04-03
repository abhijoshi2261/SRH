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