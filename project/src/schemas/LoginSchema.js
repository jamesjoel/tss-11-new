import * as YUP from 'yup';

let LoginSchema = YUP.object({
    username : YUP.string().email("Email Id is Not correct").required("Insert Your Email/Username Id"),
    password : YUP.string().required("Insert Your Password")
})

export default LoginSchema;