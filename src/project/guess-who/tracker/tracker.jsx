import React, { useContext, useState } from "react";
import { appStateContext } from "../../../app";

const tracker = () => {
    const appState = useContext(appStateContext);
    return (
        <section className="trackerSec">
            <ol>
                <li>
                    <h4>Life Left</h4>
                    <p>{appState.trackerState.life}</p>
                </li>
                <li>
                    <h4>Time Left</h4>
                    <p>{appState.trackerState.time}</p>
                </li>
                <li>
                    <h4>Question Answered</h4>
                    <p>{appState.trackerState.questioncount}</p>
                </li>
            </ol>
        </section>
    );
};
export default tracker;