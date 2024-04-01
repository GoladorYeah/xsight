'use client'

import {useEffect} from "react";

export default function Meetings() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
        script.onload = function (ev) {
            console.log("script loaded!!");
        };
        script.onerror = function (ev) {
            console.log("script failed to load." + ev);
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <div className="max-w-screen-xl px-2.5 py-4 mx-auto">
                <div
                    className="meetings-iframe-container"
                    data-src="https://meetings-eu1.hubspot.com/xsight?embed=true"
                ></div>
            </div>
        </div>
    )
}