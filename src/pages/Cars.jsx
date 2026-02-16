import { useEffect, useRef } from 'react';

function Cars() {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.autoscout24.ch/assets/hci/v2/hci.current.js";
        containerRef.current.appendChild(script);
    }, []);

    return (
        <div className="page page-cars" ref={containerRef}>
            <div id="page-cars" className="anchor"></div>
            <div className="content-wrapper">
                <h2>Unser Autoangebot</h2>
                <div className="hci-container" data-config-id="4654" data-language="de" data-entry-point="search"></div>
            </div>
        </div>
    );
}

export default Cars;
