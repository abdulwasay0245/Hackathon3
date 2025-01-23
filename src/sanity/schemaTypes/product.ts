import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
            title: "Name",
        },
        
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "category",
            type: "string",
            validation: (rule) => rule.required(),
            title: "Category",
        },
        {
            name: "quantity",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Quantity",
        },
        {
            name: "description",
            type: "string",
            title: "Description",
            validation: (rule) => rule.required(),
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
    
      
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }

    ]
})