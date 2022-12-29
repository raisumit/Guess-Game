import React, { useContext } from "react";
// import { gameFormateContext } from "../../../app";
import { appStateContext } from "../../../app";
import { selectedOptionContext } from "../hint-option/hint-option";


const Option = (props) => {
    const selectedOption = useContext(selectedOptionContext);
    // const formate = useContext(gameFormateContext);
    const appState = useContext(appStateContext);
    function optionClickHandle(e) {
        if (appState.format == 'img-w' && e.target.innerText.toLowerCase() === selectedOption.name.toLowerCase()) {
            appState.settrackerState((prev) => {
                return {
                    ...prev,
                    questioncount: prev.questioncount + 1,
                    time: 10
                }
            });
            props.correctSelected();
        } else if (e.target.dataset.name && e.target.dataset.name.toLowerCase() == selectedOption.name.toLowerCase()) {
            appState.settrackerState((prev) => {
                return {
                    ...prev,
                    questioncount: prev.questioncount + 1,
                    time: 10
                }
            })
            props.correctSelected();
        } else {
            appState.settrackerState((prev) => {
                return {
                    life:prev.life-1,
                    questioncount: prev.questioncount + 1,
                    time: 10
                }
            });
            props.correctSelected();
        }
    }
    return (
        <div className="guess">
            {
                appState.format == 'img-w' ? <h2 onClick={optionClickHandle}>{props.option.name}</h2> :
                    <img onClick={optionClickHandle} data-name={props.option.name} src={props.option.path} />
            }
        </div>
    );
}
export default Option;