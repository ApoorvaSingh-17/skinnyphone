import React from "react";
import logo from "../assets/logo2.png";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {

    const links = ["Home", "About", "Products", "Contact"]

    return (
        <div className="nav-container">
            <div className="wrapper">
                <div className="leftSide">
                    <div className="logo">
                        <img src= {logo} alt="Skynify logo"></img>
                    </div>
                    <div className="brand-name">
                        <h1>Skynify</h1>
                    </div>
                </div>
                <div className="center">
                    <div className="search-container">
                        <input placeholder="Search"/>
                        <div>
                        <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="nav-items">
                    <ul>
                    {links.map((link,index) => (
                            <li key={index}>{link}</li>
                        
                    ))}
                    </ul>
                    </div>
                    <div className="menu-item">
                        <Badge badgeContent="0" color="primary">
                            <ShoppingCartOutlined />
                        </Badge>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar