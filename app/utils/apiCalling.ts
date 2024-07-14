

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