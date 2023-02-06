import React from 'react';
// import loader from "../../assets/img/loader.svg"
import loader from "../../assets/img/loader2.gif"

const FullScreenLoader = () => {
    return (
        <div className="ProcessingDiv">
            <div className="center-screen">
                <img className="loader-size" src={loader} alt="Loader"/>
            </div>
        </div>

    );
};

export default FullScreenLoader;