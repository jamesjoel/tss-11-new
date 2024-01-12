import * as YUP from 'yup'

let SubCateSchema = YUP.object({
    category : YUP.string().required("Select Category"),
    name : YUP.string().required("Insert Sub-Category"),
})

export default SubCateSchema;