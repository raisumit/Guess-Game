import React, { createContext, useEffect, useState, useContext } from "react";
import HeaderCompo from "./project/guess-who/header";
import NavCompo from "./project/guess-who/nav";
import HintOptionCompo from "./project/guess-who/hint-option";

export const levelContext = React.createContext();
export const gameFormateContext = React.createContext()
const App = () => {
    const [level, setLevel] = useState('easy');
    const [format, setFormate] =useState('w-img');
    
    return (
        <>
            <HeaderCompo heading="Guess who ?" />
            <levelContext.Provider value={level}>
                <gameFormateContext.Provider value={format} >
                    <NavCompo setFormate={setFormate} getLevel={setLevel} />
                    <HintOptionCompo />

                </gameFormateContext.Provider>
            </levelContext.Provider>
        </>
    );
}

export default App;