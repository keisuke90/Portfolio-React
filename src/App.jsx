import React, { useState } from "react";
import "./styles.css";

export const App = () => {  
    return (
      <>
        <div className="header">
            <h1 className="header-logo">KEISUKE's PORTFOLIO</h1>
            <nav>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">WORKS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
        </div>
        <div class="main-content">
        </div>
      </>
    );
  };