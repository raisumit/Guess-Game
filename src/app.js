import React, { createContext, useEffect, useState, useContext } from "react";
import options from './data/option.json';
import HeaderCompo from "./project/guess-who/header";
import NavCompo from "./project/guess-who/nav";
import HintOptionCompo from "./project/guess-who/hint-option";

const levelContext = React.createContext();
const App = () => {
    return (
        <>
            <HeaderCompo heading="Guess who ?" />
            <levelContext.Provider value={options}>
                <NavCompo />
                <HintOptionCompo />
            </levelContext.Provider>
        </>
    );
}

export default App;