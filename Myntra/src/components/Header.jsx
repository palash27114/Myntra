import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { FaShieldHeart } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
const Header = () => {

const bag=  useSelector(store=>store.Bag)
const count = bag.length;



  return (
    <div>
       <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
            <div className="action_container">
            <FaCircleUser/>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <FaShieldHeart />
                <span className="action_name">Wishlist</span>
            </div>

            <Link to="/Bag" className="action_container" >
            <MdShoppingBag />
                <span className="action_name"  >Bag</span>
                <span className="bag-item-count">{count}</span>
            </Link>
        </div>
    </header>
    </div>
  )
}

export default Header
