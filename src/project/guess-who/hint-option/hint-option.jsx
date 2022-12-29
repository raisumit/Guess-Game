import React, { useContext, useEffect, useState } from "react";
import options from '../../../data/option.json';
import HintCompo from "../hint";
import OptionsCompo from "../options";
import { appStateContext } from "../../../app";

export const selectedOptionContext = React.createContext();
const HintOption = (props) => {
    const appState = useContext(appStateContext);
    const [selectGuess, setSelectguess] = useState({});
    useEffect(() => {
        getOptionToShow();
    }, []);
    function getOptionToShow() {
        const randomGuess = options[Math.floor(Math.random() * options.length)];
        localStorage.removeItem('optionToShow');
        setSelectguess(randomGuess);
    }
    return (
        <section className="qa">
            {appState.trackerState.life == 0 ? <div className="hint container">
                <h2>You Run out of life please click on Reset to start the game again</h2>
            </div> : <selectedOptionContext.Provider value={selectGuess}>

                <HintCompo />
                <OptionsCompo correctOptionSelect={getOptionToShow} />
            </selectedOptionContext.Provider>}

        </section>
    );
}
export default HintOption;