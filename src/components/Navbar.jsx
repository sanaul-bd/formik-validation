// import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './Registration';
import Home from './Home';
import Login from './Login';

export const Navbar = () => {
    return (
        <div className=''>
            <div>
                <nav>
                    <ul className='flex gap-x-4 py-4 bg-slate-700 text-white font-semibold justify-center '>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/registration">Registration</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </div>
    )
}
