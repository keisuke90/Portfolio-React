import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
        <div className="header">
            <h1 className="header-logo">KEISUKE's PORTFOLIO</h1>
            <nav>
                <ul>
                    <li><Link to="Portfolio-React">HOME</Link></li>
                    <li><Link to="works">WORKS</Link></li>
                    <li><Link to="contact">CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    </>
  );
};