import React, { useContext, useEffect, useState } from "react";
import OptionCompo from "../option";
import { levelContext } from "../../../app";


const Options = (props) => {
    const level = useContext(levelContext);
    const [option, setOption] = useState([]);

    useEffect(() => {
        if (props.selectedOption.name) {
            if (!JSON.parse(localStorage.getItem('optionToShow'))) {
                const path = ((props.selectedOption.name.replace(/ /g, '-') + "-options.json"));
                getOptions('/src/data/options/' + path);
            } else {
                showOption();
            }
        }
        function showOption() {
            const randomOptionsToShow = JSON.parse(localStorage.getItem('optionToShow'));
            const optionsArr = randomOptionsToShow[level];
            optionsArr.splice(Math.floor(Math.random() * optionsArr.length), 0, props.selectedOption)
            setOption(optionsArr);
        }
        async function getOptions(url) {

            const randomOptionsToShow = await fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem('optionToShow', JSON.stringify(data));
                    return data;
                }).catch((err) => {
                    console.log(err);
                });
            console.log(randomOptionsToShow);
            const optionsArr = randomOptionsToShow[level];
            optionsArr.splice(Math.floor(Math.random() * optionsArr.length), 0, props.selectedOption)
            setOption(optionsArr);
        }
    }, [level, props.selectedOption])

    return (
        <div className="options container">
            <div className="options-container">
                {option.map((el, ind) => {
                    return (
                        <OptionCompo key={ind} option={el} />
                    )
                })}
            </div>
        </div>
    )
}

export default Options;