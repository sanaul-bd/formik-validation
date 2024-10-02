import * as Yup from "yup"

export const regValidation = Yup.object({
    firstName: Yup.string().min(2).max(4).required("Please Enter Your First name "),
    lastName: Yup.string().min(3).max(10).required("Please Enter Your Last name "),
    email: Yup.string().email("please Enter your Email").required("Email Required"),
    password: Yup.string().min(6).max(10).required("Enter Password"),
    confirmPassword: Yup.string().min(6).max(10).oneOf([Yup.ref('password')], "Password not match").required("Re Enter Password")
});
