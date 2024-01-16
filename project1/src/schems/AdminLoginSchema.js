import *as YUP from 'yup';

let AdminLoginSchema = YUP.object({
    username : YUP.string().required("Insert Your Username"),
    password : YUP.string().required("Insert your password")
});

export default AdminLoginSchema;