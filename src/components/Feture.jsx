import { useFormik } from "formik";
import * as Yup from 'yup';

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

// as far i know

function Feture() {

    // password show hide state 
    const [show, setShow] = useState(false);
    console.log(show)

    // initial value can replace state 
    const formic = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2).required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(4, "must need 4 character password! ").required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            alert(values.name)
            resetForm({ values: '' })
        }
    });

    console.log("errors 🚩", formic.errors)


    return (
        <div className="lg:h-[100vh] lg:w-full">
            <div className="bg-gray-500 p-3 text-center text-wrap font-semibold text-2xl text-white my-2">
                <h2>User Signup</h2>
            </div>

            {/* form section */}
            <div className="flex ite justify-center bg-slate-100 text-black  py-12 w-full">
                {/* get name , email, pass for sign up  */}
                <div className="bg-slate-500 w-2/5 p-4">
                    <form className="" onSubmit={formic.handleSubmit}>
                        {/* name */}
                        <div className="flex flex-col">
                            <label htmlFor="">Name :</label>
                            <input className="bg-white p-2 rounded mt-1" type="text" id="name" name="name" value={formic.values.name} onChange={formic.handleChange} placeholder="Enter Your Name" required /> <br />
                            {formic.touched.name && formic.errors.name && <span style={{ color: "red" }}>{formic.errors.name}</span>}
                        </div>
                        {/* email */}
                        <div className="flex flex-col">
                            <label htmlFor="">Email :</label>
                            <input className="bg-white p-2 rounded mt-1" type="text" id="email" name="email" value={formic.values.email} onChange={formic.handleChange} placeholder="Enter Email" required /> <br />
                            {formic.touched.email && formic.errors.email && <span style={{ color: "red" }}>{formic.errors.email}</span>}
                        </div>
                        {/* password */}
                        <div className="flex flex-col relative">
                            <label htmlFor="">Password :</label>
                            <input className="bg-white p-2 rounded mt-1 pe-12" type={show ? "text" : "password"} id="password" name="password" value={formic.values.password} onChange={formic.handleChange} placeholder="****" required /> <br />
                            {formic.touched.password && formic.errors.password && <span style={{ color: "red" }}>{formic.errors.password}</span>}
                            <span className="absolute right-5 top-10  "  onClick={()=> setShow(!show)}>
                                {show ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                        <div><button className="bg-red-500 hover:bg-red-600 px-10 my-2 " type="submit">Sign Up</button></div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Feture
