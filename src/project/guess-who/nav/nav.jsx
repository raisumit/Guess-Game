import React, { useRef, useState, useEffect, useContext } from "react";
// import { gameFormateContext } from "../../../app";
import { appStateContext } from "../../../app";
const Nav = (props) => {
    // const formate = useContext(gameFormateContext);
    const appState = useContext(appStateContext);
    const EasyLevel = useRef(null);
    const hardLevel = useRef(null);
    function setLevel(e) {
        if (e.target.innerText.toLowerCase() == 'hard') {
            EasyLevel.current.classList.remove('level');
            hardLevel.current.classList.add('level');
        } else {
            EasyLevel.current.classList.add('level');
            hardLevel.current.classList.remove('level');
        }
        appState.setLevel(e.target.innerText.toLowerCase());
    }
    return (
        <nav>
            <ol className="nav">
                <li onClick={(e) =>{window.location.reload();}} className="nav-link nav-hover">Reset</li>
                <li ref={EasyLevel} onClick={setLevel} className="nav-link nav-hover level"> Easy </li>
                <li ref={hardLevel} onClick={setLevel} className="nav-link nav-hover"> Hard </li>

                <li className="nav-link nave-three nav-hover">
                    <select value={appState.format} id="select"
                        onChange={(e) => {
                            appState.setFormate(e.target.value);
                        }}>
                        <option value="img-w">Image To Word</option>
                        <option value="w-img">Word To Image</option>
                    </select>
                </li>
            </ol>
        </nav>
    );
}
export default Nav;