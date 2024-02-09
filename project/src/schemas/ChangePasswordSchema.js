import * as YUP from 'yup'

const ChangePasswordSchema = YUP.object({
    
    current_password : YUP
                    .string()
                    .required("Insert Your Current Password"),

    new_password : YUP
                .string()
                .test("pass-length", "Password should be min 6 char.", (value)=>{
                    return value.length < 6 ? false : true;
                })
                .test("pass-strong", "Password should be strong", (value)=>{
                    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
                    if(reg.test(value)){
                        return true;
                    }else{
                        return false;
                    }
                })
                .required("Insert New Your Password"),


    confirm_new_password : YUP.string().oneOf([YUP.ref("new_password")], "New Password and Confirm New Password Should be same").required("Insert Your Re-Password")
    
});
export default ChangePasswordSchema;