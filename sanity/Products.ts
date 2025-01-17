export default {
    name: "products",
    type: "document",
    title : "Products",
    fields : [
        {
         name: "productname",
        type : "string",
        title : "Product Name"
        },
        {
        title:"Product Type",
        name :"producttype",
        type :"string"
        },
        {
        title :"Slug",
        name :"slug",
        type:"slug",
        options: {
            source :"productname",
            maxLenght: 400,    // will be ignored if slugify is set
            slugify: (input :string) => input.toLowerCase().replace(/\s+/g,'-').slice(0,400)
        }
        },
        {
           name :"description",
           title:"Description",
           type: "array",
           of : [
            {
                type: "block"
            }
           ] 
        },
        {
        name :"image",
        type:'array',
        title :"Image",
        of : [
            {
            type :"image",
            fields: [
                {
                    name :"alt",
                    type:"text",
                    title :"Alternative text"
                }
            ]
            }
        ]
        },
        {
            name :"price",
            type:"number",
            title :"Price"
        },
        
    ]
}