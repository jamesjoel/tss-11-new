import * as YUP from 'yup'

let ProductSchema = YUP.object({
    // title : YUP.string().test("fCapital", "Product Title First Letter should be Capital",(value)=>{
    //     let arr = value.split("");// sony = [s, o, n, y]
    //     if(arr[0].toUpperCase() == arr[0]){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }).required("Insert Product Title"),
    title : YUP.string().required("Insert Product Title"),
    price : YUP.number().typeError("Insert Numbers only").required("Insert Product Price"),
    discount : YUP.number().typeError("Insert Numbers only").required("Insert Product Discount"),
    quantity : YUP.number().typeError("Insert Numbers only").required("Insert Total Product for sell"),
    category : YUP.string().required("Select Product Category"),
    subcategory : YUP.string().required("Select Product Sub Category"),
    detail : YUP.string().required("Insert Product Detail"),
    image : YUP.string().test("imgType", "File Type should be an image (.jpg, .jpeg, .png, .webp, .gif)", (value)=>{
        let arr = value.split(".");
        let ext = arr[arr.length-1];
        if(ext == "jpg" || ext =="jpeg" || ext =="png" || ext=="gif" || ext =="webp") {
            return true;
        }else{
            return false;
        }
    }).required("Select Product Image")
    
})

export default ProductSchema;