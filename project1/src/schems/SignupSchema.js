import *as  YUP from 'yup'

const SignupSchema =YUP.object({
  name : YUP.string().required("Insert your Full name"),
   username : YUP.string().email("INCORRET email id").required("insert your username"),
   password : YUP.string().required("insert your password"),
   repassword : YUP.string().oneOf([YUP.ref("password")],"password and repassword should be same").required("insert your repassword"),
   address : YUP.string().required("insert your address"),
   state : YUP.string().required("plz select your state"),
   city : YUP.string().required(" plz select your city"),
   contact : YUP.number().min(100000000,"min 8 disit").max(999999999999,"max 12 disit").typeError('insert nimber only').required("insert your contact no"),
   gender : YUP.string().required("select your gender"),

})

export default SignupSchema
