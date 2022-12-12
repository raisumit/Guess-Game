import React from "react";
function setLevel(e){

}
const Nav = () => {

    return (
        <nav>
        <ol className="nav">
            <li className="nav-link nav-hover">Reset</li>
            <li onClick={setLevel} className="nav-link nav-hover level"> Easy </li>
            <li onClick={setLevel} className="nav-link nav-hover"> Hard </li>

            <li className="nav-link nave-three nav-hover">
                <select id="select">
                    <option value="w-img">Word To Image</option>
                    <option value="img-w">Image To Word</option>
                </select>
            </li>
        </ol>
    </nav>
    )
}
export default Nav;