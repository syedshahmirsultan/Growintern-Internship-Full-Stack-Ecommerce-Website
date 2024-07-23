import BriefProduct from "@/app/components/BriefProduct";
import getAllProducts, { detailOfSingleProduct } from "@/app/utils/apiCalling";
import allProductType, { singleProductType } from "@/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";



//This will make this forcefully dynamic .I did this just to deal with Next.js error that this will on deployment will give error static page turns into dynamic page
export const dynamic='force-dynamic'


/*Generate Static Params function will take the data of getAllProducts API
 before the application will run this will be better practice for SEO as Well */

export async function generateStaticParams(){
    const data = await getAllProducts() as allProductType;
    return data.result.map((item:singleProductType) => {slug :item.slug.current })

}


//Generate MetaData Function is responsible to generate the title of the page
export async function generateMetadata({params}:{params :{slug :string}}){
    const slug = params.slug;
    const detail = await detailOfSingleProduct(slug) as allProductType;
    return{
     title : detail.result[0].productname,
    }  
}


//Brief Function
 async function Brief({params} :{params :{slug:string}}){
    const slug = params.slug;
    const data = await detailOfSingleProduct(slug);
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    {/* BriefProduct*/}
    return (  
 <BriefProduct productData={data.result[0]} user={user}/>
    )
}

export default Brief;

