import React, { useContext } from "react";
import { gameFormateContext } from "../../../app";
import { selectedOptionContext } from "../hint-option/hint-option";


const Option = (props) => {
    const selectedOption = useContext(selectedOptionContext);
    const formate = useContext(gameFormateContext);
    function optionClickHandle(e){
        if(formate == 'img-w' && e.target.innerText.toLowerCase() === selectedOption.name.toLowerCase()){
            console.log('selected is '+ e.target.innerText, 'correct one is '+selectedOption.name);
        }else{

        }
    }
    return (
        <div className="guess">
            {formate == 'img-w'? <h2 onClick={optionClickHandle}>{props.option.name}</h2> : <img onClick={optionClickHandle} src={props.option.path}/>}
        </div>
    );
}
export default Option;