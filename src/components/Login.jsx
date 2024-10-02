// src/components/RegistrationForm.jsx
import { useState } from 'react';
import './Css/Login.css'


const Login = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        age: '',
        number: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className='flex justify-center m-10 '>
            <form className='input-form' onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Age:</label>
                    <input type="date" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Phone Number:</label>
                    <input type="tel" name="number" value={formData.number} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Confirm Password:</label>
                    <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Login;
