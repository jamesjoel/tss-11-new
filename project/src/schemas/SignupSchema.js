import * as YUP from 'yup'

const SignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    username : YUP.string().email("Incorrect Email Id").required("Insert Your Username/Email"),
    password : YUP
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
        .required("Insert Your Password"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password Should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Numbers Only").min(1000000000, "Minimum 10 Digit").max(999999999999, "Maxmimum 12 Digit").required("Insert Your Contact"),
    address : YUP.string().required("Insert Your Address"),
    state : YUP.string().required("Select Your State"),
    city : YUP.string().required("Select Your City"),
    gender : YUP.string().required("Select Your Gender"),
});
export default SignupSchema;