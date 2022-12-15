import React from "react";

const Hint = (props) => {

    return (
        <div className="hint container">
        <h2>WHO IS HE ?</h2>
        <picture>
            <source media="(min-width: 650px)" srcSet="/ratan-tata.jpg" />
            <source media="(max-width: 767px)" srcSet="/ratan-tata.jpg" />
            <img src="/ratan-tata.jpg" />
        </picture>
    </div>
    );
}
export default Hint;