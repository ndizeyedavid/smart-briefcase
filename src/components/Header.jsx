import { Link, NavLink } from "react-router-dom"
const Header = () => {
    return (
        <div className="p-3 bg-white shadow-md navbar" style={{ borderRadius: "0 0 30px 30px" }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999999999999] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/track">Track</NavLink></li>
                        <li><NavLink to="/history">History</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><NavLink to="/documentation">Documentation</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="text-xl btn btn-ghost">Smart Briefcase</Link>
            </div>
            <div className="navbar-end">
                <NavLink to="/login" className="btn btn-error btn-outline">
                    Logout
                </NavLink>
            </div>
        </div>
    )
}

export default Header
