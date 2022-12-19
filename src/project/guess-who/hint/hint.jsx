import React, {useContext} from "react";
import selectedOptionContext from '../hint-option';
import { gameFormateContext } from "../../../app";

const Hint = (props) => {
// const selectedOption = useContext(selectedOptionContext);
const formate = useContext(gameFormateContext);
    return (
        <div className="hint container">
        <h2>WHO IS HE ?</h2>
        {formate == 'img-w'? <picture>
            <source media="(min-width: 650px)" srcSet={props.selectedOption ? props.selectedOption.path :''} />
            <source media="(max-width: 767px)" srcSet={props.selectedOption ? props.selectedOption.path :''} />
            <img src={props ? props.selectedOption.path :''} />
        </picture> : <h2>{props ? props.selectedOption.name:''}</h2> }
    </div>
    );
}
export default Hint;