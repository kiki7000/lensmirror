import React from "react";

import { NextUIProvider } from "@nextui-org/react";

const App = () => {
    return (
        <NextUIProvider>
            <div className="px-100 py-100">
                <svg>
                    <line width={100} />
                </svg>
            </div>
        </NextUIProvider>
    )
}

export default App;
