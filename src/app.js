import React, { createContext, useEffect, useState, useRef, useContext } from "react";
import HeaderCompo from "./project/guess-who/header";
import NavCompo from "./project/guess-who/nav";
import TrackerCompo from "./project/guess-who/tracker";
import HintOptionCompo from "./project/guess-who/hint-option";
import useTimer from "./project/guess-who/customHook/useTimer";

export const appStateContext = React.createContext();
const App = () => {
    // let optionpick = useRef(null);
    const [level, setLevel] = useState('easy');
    const [format, setFormate] = useState('w-img');
    const [trackerState, settrackerState] = useTimer({
        time: 10,
        life: 2,
        questioncount: 0
    });

    let appState = {
        level,
        setLevel,
        format,
        setFormate,
        trackerState,
        settrackerState,
        // optionpick
    };

    return (
        <>
            <HeaderCompo heading="Guess who ?" />
            <appStateContext.Provider value={appState} >
                <NavCompo />
                <TrackerCompo />
                <HintOptionCompo />
            </appStateContext.Provider>
        </>
    );
}

export default App;