import * as YUP from 'yup'

let ProductSchema = YUP.object({
    title : YUP.string().required("Insert Product Title"),
    price : YUP.number().typeError("Insert Numbers only").required("Insert Product Price"),
    discount : YUP.number().typeError("Insert Numbers only").required("Insert Product Discount"),
    quantity : YUP.number().typeError("Insert Numbers only").required("Insert Total Product for sell"),
    category : YUP.string().required("Select Product Category"),
    subcategory : YUP.string().required("Select Product Sub Category"),
    detail : YUP.string().required("Insert Product Detail"),
    image : YUP.string().required("Select Product Image")
    
})

export default ProductSchema;