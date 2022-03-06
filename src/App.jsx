import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Works } from "./components/Works";
import "./styles.css";

export const App = () => {  
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="works" element={<Works />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};