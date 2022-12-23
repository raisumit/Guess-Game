import React, { useEffect, useState } from "react";
import options from '../../../data/option.json';
import HintCompo from "../hint";
import OptionsCompo from "../options";

export const selectedOptionContext = React.createContext();
const HintOption = (props) => {
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
            <selectedOptionContext.Provider value={selectGuess}>
                <HintCompo  />
                <OptionsCompo correctOptionSelect={getOptionToShow} />
            </selectedOptionContext.Provider>
        </section>
    );
}
export default HintOption;