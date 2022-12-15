import React, { useContext, useEffect, useState } from "react";
import options from '../../../data/option.json';
import HinCompo from "../hint";
import OptionsCompo from "../options";


const HintOption = (props) => {
    const [selectGuess, setSelectguess] = useState({});
    useEffect(() => {
        setSelectguess((prev) => {
            console.log(options);
        })
    })
    return (
        <section className="qa">
            <HinCompo />
            <OptionsCompo />
        </section>
    )
}
export default HintOption;