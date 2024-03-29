import { CompanyDetails, NavbarItems } from "../constants/datas"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
        <>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {Object.keys(NavbarItems).map(itemKey => (
                    <li key={itemKey}>
                        <Link to={NavbarItems[itemKey].route}>
                        {NavbarItems[itemKey].label}
                        </Link>
                    </li>
                    ))}
                    </ul>
                    </div>
                    <div className="flex flex-col">
                        <sub className="w-full flex justify-center italic">Employee Dashboard</sub>
                        <a className="btn btn-ghost text-xl">{CompanyDetails.name}</a>
                        <sup className="italic text-sx">{CompanyDetails.tagline1}</sup>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Object.keys(NavbarItems).map(itemKey => (
                        <li key={itemKey}>
                            <Link to={NavbarItems[itemKey].route}>
                            {NavbarItems[itemKey].label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
