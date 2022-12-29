import React, { createContext, useEffect, useState, useRef, useContext } from "react";
import HeaderCompo from "./project/guess-who/header";
import NavCompo from "./project/guess-who/nav";
import TrackerCompo from "./project/guess-who/tracker";
import HintOptionCompo from "./project/guess-who/hint-option";

// export const levelContext = React.createContext();
// export const gameFormateContext = React.createContext();
export const appStateContext = React.createContext();
const App = () => {
    // let timer = useRef(undefined);
    let [timer,setTimer] =useState(null);
    const [level, setLevel] = useState('easy');
    const [format, setFormate] = useState('w-img');
    const [trackerState, settrackerState] = useState({
        time: 10,
        life: 2,
        questioncount: 0
    });

    useEffect(() => {
        handleTimer();
    }, [trackerState.questioncount]);
    function handleTimer() {
        console.log(trackerState.time);
        clearInterval(timer);
        timer = setInterval((e) => {
            settrackerState((prev) => {
                console.log(prev.time);
                if (prev.time <= 0) {
                    clearInterval(timer);
                    return { ...prev }
                } else {
                    return { ...prev, "time": prev.time - 1 }
                }
            });

        }, 1000);
    }
    let appState = {
        level,
        setLevel,
        format,
        setFormate,
        trackerState,
        settrackerState,
        timer
    };

    return (
        <>
            <HeaderCompo heading="Guess who ?" />
            {/*  <levelContext.Provider value={level}>
                <gameFormateContext.Provider value={format} >
                    <NavCompo setFormate={setFormate} getLevel={setLevel} />
                    <TrackerCompo />
                    <HintOptionCompo />
                </gameFormateContext.Provider>
            </levelContext.Provider> */}

            <appStateContext.Provider value={appState} >
                <NavCompo />
                <TrackerCompo />
                <HintOptionCompo />
            </appStateContext.Provider>
        </>
    );
}

export default App;