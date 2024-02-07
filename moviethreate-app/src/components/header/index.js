import { useState } from "react";
import Logo from "../common/logo";
import SearchBar from "../common/search-bar";
import BookMark from "../common/book-marks";
import User from "../common/user";
import Menu from "../common/menu";
import "./style.css";
import { Link } from "react-router-dom";
const MovieHeader = () => {
    const [menuOpen,setMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="container">
            <nav className="navbar">
                <div className="row align-items-center px-sm-3 py-sm-3">
                    <div className="col-12 col-lg-3 cursor">
                        <Link to="/">
                            <Logo/>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <SearchBar/>
                    </div>
                    <div className="col-12 col-lg-3 ">
                        <div className="mx-5 inline-end d-lg-flex">
                            <div className="book-mark">
                                <BookMark/>
                            </div>
                            <div className="user">
                                <User/>
                            </div>
                            <div className="menu" onClick={toggleMenu}>
                                <Menu/>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </nav>
            {
                menuOpen && (<div className={`menu-slide ${menuOpen?`open`:''}`}>
                    <div className="menu-header">
                        <span onClick={toggleMenu} className="menu-close-icon">X</span>
                    </div>
                    <ul className="slider-menu m-2 p-2">
                        <li className="px-3 menu-links"><Link to="/">About</Link></li>
                        <li className="px-3"><Link to="/">About</Link></li>
                        <li className="px-3"><Link to="/">About</Link></li>
                        <li className="px-3"><Link to="/">About</Link></li>
                        <li className="px-3"><Link to="/">About</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default MovieHeader;