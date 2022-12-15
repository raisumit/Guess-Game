import React, { useRef, useState, useEffect } from "react";
const Nav = (props) => {
    const [format, setFormate] =useState('img-w');
    const EasyLevel = useRef(null);
    const hardLevel = useRef(null);
   
    return (
        <nav>
            <ol className="nav">
                <li  className="nav-link nav-hover">Reset</li>
                <li ref={EasyLevel} onClick={setLevel} className="nav-link nav-hover level"> Easy </li>
                <li ref={hardLevel} onClick={setLevel} className="nav-link nav-hover"> Hard </li>

                <li className="nav-link nave-three nav-hover">
                    <select value={format} id="select" 
                    onChange={(e) => {
                        setFormate(e.target.value);
                       
                    }}>
                        <option value="w-img">Word To Image</option>
                        <option value="img-w">Image To Word</option>
                    </select>
                </li>
            </ol>
        </nav>
    );
    function setLevel(e) {
        if (e.target.innerText.toLowerCase() == 'hard') {
            EasyLevel.current.classList.remove('level');
            hardLevel.current.classList.add('level');
        }else{
            EasyLevel.current.classList.add('level');
            hardLevel.current.classList.remove('level');
        }
        props.getLevel(e.target.innerText.toLowerCase());
    }
}
export default Nav;