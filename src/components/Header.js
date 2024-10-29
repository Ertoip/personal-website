import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import CustomLink from "./CustomLink";

const Header = ({ isInverted }) => {
    const location = useLocation(); // Use to get the current URL

    // Determine if the page is inverted by checking the current URL or prop
    const invertedPath = isInverted || location.pathname.includes("/inverted");

    return (
        <div className={`top-header ${invertedPath ? "inverted" : ""}`}>
            <nav>
                <CustomLink to={invertedPath ? "/inverted" : "/"}>Home</CustomLink>
                <CustomLink to={invertedPath ? "/inverted/about" : "/about"}>About</CustomLink>
                <CustomLink to={invertedPath ? "/inverted/portfolio" : "/portfolio"}>Portfolio</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
