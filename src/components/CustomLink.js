import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CustomLink.css";

const CustomLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            className={`custom-link ${isActive ? "custom-link-active" : ""}`}
            to={to}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
