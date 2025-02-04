import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App />}>
                <Route index element = {<Home />} />
                <Route path=":country" element = {<CountryDetail />} />
                <Route path="contact" element = {<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);