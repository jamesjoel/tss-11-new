import * as YUP from 'yup'

let StuSchema = YUP.object({
    name : YUP.string().required("*"),
    age : YUP.number().typeError("*").required("*"),
    class : YUP.string().required("*"),
    gender : YUP.string().required("*")
})

export default StuSchema;