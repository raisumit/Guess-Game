import React, { useContext } from "react";
import { gameFormateContext } from "../../../app";

const Option = (props) => {
    const formate = useContext(gameFormateContext);
    console.log(formate);
    return (
        <div className="guess">
            {formate == 'img-w'? <h2>{props.option.name}</h2> : <img src={props.option.path}/>}
        </div>
    )
}
export default Option;