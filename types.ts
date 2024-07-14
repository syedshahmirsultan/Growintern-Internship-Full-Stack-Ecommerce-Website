import { Image } from "sanity";


interface productSlugType{
    current:string,
     _type: string 
}

export interface singleProductType{
    price: number,
    image: Image[],
    producttype: string,
    productname: string,
    slug: productSlugType,
    _id: string,
    DescriptionText: string
  }

  export default interface allProductType{
    query: string,
    result : singleProductType[]
  }