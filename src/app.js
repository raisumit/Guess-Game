import React, { createContext, useEffect, useState, useContext } from "react";
import HeaderCompo from "./project/guess-who/header";
import NavCompo from "./project/guess-who/nav";
import HintOptionCompo from "./project/guess-who/hint-option";

export const levelContext = React.createContext();
const App = () => {
    const [level, setLevel] = useState('easy');
    
    return (
        <>
            <HeaderCompo heading="Guess who ?" />
            <levelContext.Provider value={level}>
                <NavCompo getLevel={setLevel} />
                <HintOptionCompo  />
            </levelContext.Provider>
        </>
    );
}

export default App;