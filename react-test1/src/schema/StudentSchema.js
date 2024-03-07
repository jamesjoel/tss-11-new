import * as YUP from 'yup';

let StudentSchema = YUP.object({
    name : YUP.string().required("Insert Full Name"),
    class : YUP.string().required("Select Student Class"),
    contact : YUP.number().typeError("Insert Numbers Only").required("Insert Contact Number"),
    gender : YUP.string().required("Select Gender"),
    address : YUP.string().required("Insert Full Address"),
})

export default StudentSchema;