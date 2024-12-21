import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = ({ onComplete }) => {
    const navigate = useNavigate();

    const [uname, setUname] = useState('');
    const [pswd, setPswd] = useState('');
    // onComplete()
    function showPassword() {
        const pswdEl = document.getElementById('pswd');
        if (pswdEl.type == 'password') {
            pswdEl.type = 'text'
        } else {
            pswdEl.type = 'password'
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Verifying...');

        if (uname == import.meta.env.VITE_USERNAME && pswd == import.meta.env.VITE_PASSWORD) {
            toast.success('Login successful', { id: toastId });
            navigate("/");
        } else {
            toast.error('Invalid credentials', { id: toastId });
        }
    }
    return (
        <>
            <Toaster />

            <div className="font-[sans-serif]">
                <div className="flex items-center justify-center min-h-screen px-4 py-6 fle-col">
                    <div className="grid items-center w-full max-w-6xl gap-4 md:grid-cols-2">
                        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                            <form className="space-y-4" method="POST" action="#" onSubmit={handleForm}>
                                <div className="mb-8">
                                    <h3 className="text-3xl font-extrabold text-gray-800">Sign in</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-gray-500">Sign in to your account and track the whereabouts of your briefcase. Get logs in-time</p>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-800">User name</label>
                                    <div className="relative flex items-center">
                                        <input onChange={(e) => setUname(e.target.value)} name="username" type="text" required className="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600" placeholder="Enter user name" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-800">Password</label>
                                    <div className="relative flex items-center">
                                        <input onChange={(e) => setPswd(e.target.value)} name="password" id="pswd" type="password" required className="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600" placeholder="Enter password" />
                                        <svg onClick={() => showPassword()} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500" />
                                        <label htmlFor="remember-me" className="block ml-3 text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>

                                </div>

                                <div className="!mt-8">
                                    <button type="submit" className="w-full px-4 py-3 text-sm tracking-wide text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 focus:outline-none">
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                            <img src="/login.webp" className="block object-cover w-full h-full mx-auto max-md:w-4/5" alt="Dining Experience" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
