import React from "react";
import { default as data } from "@assets/siteMetadata.yml";
const isPast = new Date(data.event.date) <= new Date();

return (
    <>
        Il Linux Day <span>Milano</span> si{" "}
        {isPast ? "è svolto" : "svolgerà"} il
        <br />
        <span>
            {
                data.event.date.toLocaleDateString(
                    "it-IT",
                    data.event.dateOptions
                )
            }
        </span>
    </>
);

export default DateText;