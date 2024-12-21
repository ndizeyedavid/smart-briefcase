import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
    function setActive() {
        // console.log('setting')
        const navLinks = document.querySelectorAll('.nav__link');
        // console.log(navLinks)
        const windowPathName = window.location.pathname;
        // console.log(windowPathName)
        navLinks.forEach(navLink => {
            const navLinkPathname = new URL(navLink.href).pathname;

            if (windowPathName === navLinkPathname) {
                navLink.classList.add('active');
            }
        });
    }
    // setActive()
    setTimeout(setActive, 100)

    // fetching user data
    const [status, setStatus] = useState('');
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState('');
    const [isOpen, setIsOpen] = useState('green');
    useEffect(() => {
        const fetchUser = async () => {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/users/view')
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            const out = data.cont[0];
                            setUsername(out.username);
                            setProfile(out.profile);
                            // console.log(data.cont[0])

                        })
                })
        }

        const fetchStatus = async () => {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/tracking/status')
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            const out = data.cont[0].status;
                            if (out == 'open') {
                                setIsOpen(<span className={'font-medium text-red-500'}>Open</span>);
                            } else {
                                setIsOpen(<span className='font-medium text-green-500'>Closed</span>);
                            }
                            // console.log(out)
                            setStatus(out);
                            // setProfile(out.profile);

                        })
                })
        }

        fetchStatus()
        fetchUser()
    })

    return (
        <>
            <nav className="bg-white shadow-lg h-screen fixed top-0 left-0 min-w-[220px] py-6 px-1 font-[sans-serif] flex flex-col overflow-auto">

                <div className="flex flex-wrap items-center mx-6 cursor-pointer">
                    <div className="relative">
                        {profile == '' ? <div className="w-12 h-12 skeleton"></div> : <img src={profile} alt="Profile Image" className="object-cover w-12 h-12 border-white rounded-md" />}
                        {/* <img src='/person.png' className="object-cover w-12 h-12 border-white rounded-md" /> */}
                    </div>

                    <div className="ml-4 w-34">
                        <div className="text-sm text-[#3949ab] font-semibold">
                            {username == '' ? <div className="w-full h-4 skeleton"></div> : username}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">Status:
                            {status == '' ? <div className="w-full h-4 skeleton"></div> : isOpen}
                        </div>
                    </div>
                </div>

                <ul className="flex-1 my-8 space-y-3">
                    <li>
                        <Link to="/"
                            className="nav__link text-sm flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-10 px-8 py-4 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-4"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>
                            <span>Track</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/history"
                            className="nav__link text-sm flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-10 px-8 py-4 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-4"><path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z" /></svg>
                            <span>History</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile"
                            className="nav__link text-sm flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-10 px-8 py-4 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-4"><path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z" /></svg>
                            <span>Profile</span>
                        </Link>
                    </li>
                </ul>

                <ul className="pl-3 mt-8 space-y-7">
                    <li>
                        <Link to="/setting" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-4"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                                viewBox="0 0 512 512">
                                <circle cx="256" cy="378.5" r="25" data-original="#000000" />
                                <path
                                    d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z"
                                    data-original="#000000" />
                                <path
                                    d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z"
                                    data-original="#000000" />
                            </svg>
                            <span>Help Center</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                                viewBox="0 0 6.35 6.35">
                                <path
                                    d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                    data-original="#000000" />
                            </svg>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar
