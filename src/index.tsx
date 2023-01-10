import Grid from "./grid";
import React from "react";
import ReactDOM from "react-dom/client"

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <Grid />
    </React.StrictMode>
);
