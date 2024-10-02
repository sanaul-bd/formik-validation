// import React from 'react'

import { ErrorMessage, Field, Form, Formik } from "formik"
import { regValidation } from "./regValidation"



const Registration = () => {



    return (
        <div className='registration-from-container'>
            <div className="flex justify-center my-2">
                <h2> Regostration Here </h2>
            </div>

            <div className="flex justify-center">
                <Formik
                    initialValues={{ firstName: "", lastName: "", email: "", age: '', password: '', confirmPassword: '' }}
                    validationSchema={regValidation}
                    onSubmit={(values, { resetForm }) => {
                        console.log("form Data", values);
                    }}
                >
                    {
                        ({ isSubmitting, errors }) => (
                            <Form className="w-2/4">
                                {/* First Name */}
                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <span className="required">*</span>
                                    </div>
                                    <Field name='firstName' type='text' placeholder="Enter First Name" className={`${errors.firstName ? "error-input" : ""}`} />
                                    <ErrorMessage
                                        name="firstName"
                                        component='div'
                                        className="error"
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <span className="required">*</span>
                                    </div>
                                    <Field name='lastName' type='text' placeholder="Enter Last Name" className={`${errors.lastName ? "error-input" : ""}`} />
                                    <ErrorMessage
                                        name="lastName"
                                        component='div'
                                        className="error"
                                    />
                                </div>
                                {/* Email */}
                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <span className="required">*</span>
                                    </div>
                                    <Field name='email' type='text' placeholder="Email" className={`${errors.email ? "error-input" : ""}`} />
                                    <ErrorMessage
                                        name="email"
                                        component='div'
                                        className="error"
                                    />
                                </div>
                                {/* password */}
                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <span className="required">*</span>
                                    </div>
                                    <Field name='password' type='text' placeholder="password" className={`${errors.password ? "error-input" : ""}`} />
                                    <ErrorMessage
                                        name="password"
                                        component='div'
                                        className="error"
                                    />
                                </div>
                                {/* enter password */}
                                <div className="flex flex-col">
                                    <div>
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <span className="required">*</span>
                                    </div>
                                    <Field name='confirmPassword' type='text' placeholder="confirmPassword" className={`${errors.confirmPassword ? "error-input" : ""}`} />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component='div'
                                        className="error"
                                    />
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Registration
