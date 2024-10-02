import * as Yup from "yup";

export const CommonValidateSchema = Yup.object({
    firstNmae: Yup.string()
        .min(3, "First Name should be minimum 3 characters")
        .max(10, "First Name should be max 10 character only")
        .required("First Name should be required"),
    lastName: Yup.string()
        .min(3, "Last Name should be minimum 3 characters")
        .max(10, "Last Name should be max 10 character only")
        .required("Last  Name should be required"),
    email: Yup.string()
        .emai("Invillade Email")
        .required('Email is Required'),
    password: Yup.string()
        .min(8, "password should be minimum 8 characters")
        .matches(/[a-z]/, "password must be contained at last one lowercase")
        .matches(/[A-Z]/, "password must be contained at last one Uppercase")
        .matches(/\d/, "password must be contained at last one digit")
        .matches(/[!@#$%^&*(),.'"?:{}|<>]/, "password must be contained at last one spicial character")
        .required('password must be required')
})