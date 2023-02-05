import { Navbar } from "~components/Navbar";
import { GlobalStyles } from "~styles/GlobalStyles";

import { Router } from "./router";

export function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Router />
        </>
    );
}
