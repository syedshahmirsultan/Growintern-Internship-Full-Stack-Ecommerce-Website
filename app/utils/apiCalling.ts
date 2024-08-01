import refreshData from "./action";


//GetAllProducts Function
export default async function getAllProducts (){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-07-14/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++productname%2C%0A++++slug%2C%0A++++_id%2C%0A++++%22DescriptionText%22+%3Adescription%5B0%5D.children%5B1%5D.text%2C%0A++++price%2C%0A++++image%2C%0A++++producttype%0A%7D`,{
        cache:"no-store"
    })

  if (!res.ok){
    return "Error"
  }

  return res.json();
}

export async function detailOfSingleProduct(slug:string){
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-07-14/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+match+%27${slug}%27+%5D%7B%0A++productname%2C%0A++++slug%2C%0A++++_id%2C%0A++++%22DescriptionText%22+%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++image%2C%0A++++producttype%0A%7D`)
 
     if (!res.ok){
      return "Error"
     }

     return res.json();
 }



export async function getProductFromIdCart(productid:string){
const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-07-14/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+_id+match+%27${productid}%27+%5D%7B%0A++productname%2C%0A++++slug%2C%0A++++_id%2C%0A++++%22DescriptionText%22+%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++image%2C%0A++++producttype%0A%7D`)

if(!res.ok){
  return "Error"
}

return res.json();

}


export async function getAllCartProductsByUserid(userid:string){
  const res = await fetch(`http://localhost:3000/api/cartFunc?userid=${userid}`)
  
  if(!res.ok){
     return "Error"
  }
  
  return res.json();
  
  }


  export async function addToCartApiCall(userid: string, productid: string) {
    const payload = {
        userid: userid,
        productid: productid,
        quantity: 1
    };

    const res = await fetch(`http://localhost:3000/api/cartFunc`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to add to cart");
    }

    return "Okay";
}

 


export async function updateCartItem(userid:string,productid:string,quantity:number){
    const res = await fetch(`http://localhost:3000/api/cartFunc`,{
       method :"PUT",
       body :JSON.stringify({
          userid:userid,
          productid:productid,
          quantity: quantity
       })
    })
 
    await refreshData();
 }

 export async function handleDelete(userid:string,productid:string){
    const res = await fetch(`http://localhost:3000/api/cartFunc?userid=${userid}&productid=${productid}`,{
 method :"DELETE"
    })
    await refreshData();
    
 }