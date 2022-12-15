import React, {useContext, useEffect, useState} from "react";
import { levelContext } from "../../../app";

const Options = () => {
    const level = useContext(levelContext);
    const [option,setOption] = useState([]);
    
    useEffect((prev) => {
        const newOption = [];
        for(let i=0;i<level;i++){
            option.push()
        }
    },[level])
    
    return (
        <div className="options container">
            <div className="options-container">
                <div className="guess">
                    <h2>sumit</h2>
                </div>
                <div className="guess">
                    <h2>sumit</h2>
                </div>
                <div className="guess">
                    <h2>sumit</h2>
                </div>
                <div className="guess">
                    <h2>sumit</h2>
                </div>
                <div className="guess">
                    <h2>sumit</h2>
                </div>
                <div className="guess">
                    <h2>sumit</h2>
                </div>
            </div>
        </div>
    )
}

export default Options;