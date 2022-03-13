import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import "./styles.css";

export const App = () => {  
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="Portfolio-React" element={<Home />} />
                    <Route path="works" element={<Works />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};