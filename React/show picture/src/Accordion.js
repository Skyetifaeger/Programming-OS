import React, { useState } from "react";

export function Accordion() {
    const [ isToggle, setToggled] = useState(false)

    return (
        <div class = "App-header">
            <h3>Show Me</h3>
            <button
                onClick={ () => setToggled(!isToggle)}
            >Toggle</button>
        </div>
    )
}
