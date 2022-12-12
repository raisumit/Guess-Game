import React from "react";
// import './header.css';

const Header = (props) => {

    return (
        <section>
        <header>
            <div className="back-btm">
            </div>
            <div className="heading inline">
                <h1>{props.heading}</h1>
                <img src="/assets/guess-charahter-heading.png" />
            </div>
        </header>
    </section>
    );
}
export default Header;