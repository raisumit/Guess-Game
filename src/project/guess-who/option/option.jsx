import React, { useContext } from "react";
import { gameFormateContext } from "../../../app";
import { selectedOptionContext } from "../hint-option/hint-option";


const Option = (props) => {
    const selectedOption = useContext(selectedOptionContext);
    const formate = useContext(gameFormateContext);
    function optionClickHandle(e) {
        if (formate == 'img-w' && e.target.innerText.toLowerCase() === selectedOption.name.toLowerCase()) {
            props.correctSelected();
        } else if (e.target.dataset.name && e.target.dataset.name.toLowerCase() == selectedOption.name.toLowerCase()) {
            props.correctSelected();
        }
    }
    return (
        <div className="guess">
            {
            formate == 'img-w' ?  <h2 onClick={optionClickHandle}>{props.option.name}</h2> : 
            <img onClick={optionClickHandle} data-name={props.option.name} src={props.option.path} />
            }
        </div>
    );
}
export default Option;