
this is a trial project: 
formik : use for handle form .
yup : use for validation form data 
redux : use for manage state and - save data to localstore from redux state. 




--------------

import { useFormik } from "formik"
import { signupValidation } from "./SignupValidation";



const Registration = () => {

    // 
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema: signupValidation,
        onSubmit: (value) => {
            console.log(value);
        },
    })

    console.log(values);

    return (
        <div className="justify-center">
            <form >
                <div>
                    {/* email */}
                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <input
                        className="w-3/4 py-2 rounded"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter you'r email"
                    />
                </div>
                <div>
                    {/* age */}
                    <div>
                        <label htmlFor="age">Age</label>
                    </div>
                    <input
                        className="w-3/4 py-2 rounded"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="age"
                        name="age"
                        placeholder="Enter Age"
                    />
                </div>
                <div>
                    {/* password */}
                    <div>
                        <label htmlFor="password">Password</label>
                    </div>
                    <input
                        className="w-3/4 py-2 rounded"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                    />
                </div>
                <div>
                    {/* passwordConfirm */}
                    <div>
                        <label htmlFor="passwordConfirm">Confirm password</label>
                    </div>
                    <input
                        className="w-3/4 py-2 rounded"
                        value={values.passwordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="Confirm password"
                    />
                </div>
                <button type="submit" className="bg-slate-400 w-3/4 mt-4">Submit</button>
            </form>
        </div>
    )
}

export default Registration
