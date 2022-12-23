import React, { useContext } from "react";
import { selectedOptionContext } from "../hint-option/hint-option";
import { gameFormateContext } from "../../../app";

const Hint = (props) => {
    const selectedOption = useContext(selectedOptionContext);
    const formate = useContext(gameFormateContext);
    return (
        <div className="hint container">
            {(formate == "img-w") && <h2>WHO IS HE ?</h2>}
            {formate == 'img-w' ? <picture>
                <source media="(min-width: 650px)" srcSet={selectedOption ? selectedOption.path : ''} />
                <source media="(max-width: 767px)" srcSet={selectedOption ? selectedOption.path : ''} />
                <img src={selectedOption ? selectedOption.path : ''} />
            </picture> : <h2> Select picture of {selectedOption ? <u>{selectedOption.name}</u> : ''}</h2>}
        </div>
    );
}
export default Hint;