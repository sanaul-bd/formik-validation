import * as Yup from "yup"

export const loginValidation =  Yup.object({
    name: Yup.string().min(3).required("Please Enter Your name "),
    email: Yup.string().email("please Enter your Email").required("Email Required"), 
    password: Yup.string().min(6).max(10).required("Enter Password"),
    passwordConfirm: Yup.string().min(6).max(10).oneOf([Yup.ref('password')], "Password not match").required("Re Enter Password")
})