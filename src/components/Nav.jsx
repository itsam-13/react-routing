import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className="flex gap-10 justify-center text-lg mb-7">

            <NavLink className={(e) => (e.isActive ? "text-rose-400" : "")} to="/">Home </NavLink>

            <NavLink className={(e) => (e.isActive ? "text-rose-400" : "")} to="/product">Product </NavLink>

            <NavLink className={(e) => (e.isActive ? "text-rose-400" : "")} to="/service">Service </NavLink>

            <NavLink className={(e) => (e.isActive ? "text-rose-400" : "")} to="/about">About </NavLink>

        </div>
    )
}

export default Nav
