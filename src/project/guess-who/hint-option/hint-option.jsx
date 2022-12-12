import React, { useContext } from "react";

const HintOption = (props) => {
    // const mood = useContext(MoodContext);
    return (
        <section className="qa">
            <div className="hint container">
                <h2>WHO IS HE ?</h2>
                <picture>
                    <source media="(min-width: 650px)" srcSet="/ratan-tata.jpg" />
                    <source media="(max-width: 767px)" srcSet="/ratan-tata.jpg" />
                    <img src="/ratan-tata.jpg" />
                </picture>
            </div>
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
        </section>
    )
}
export default HintOption;