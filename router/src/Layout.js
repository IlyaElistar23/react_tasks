import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    const setActive = ({isActive}) => isActive? 'active-link' : 'disactive-link'
    return (
        <>
            <header className="App-header">
                <NavLink to='/' className={setActive}>Home</NavLink>
                <NavLink to='/form' className={setActive}>Form</NavLink>
                <NavLink to='/about' className={setActive}>About</NavLink>
                <NavLink to='/contact' className={setActive}>Contact</NavLink>
            </header>
            <Outlet/>
            <footer>From 2024</footer>
        </>
    )
}

export default Layout;