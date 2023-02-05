import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { FavoritesContextProvider } from "~contexts/FavoritesContexts";
import { PokemonsContextProvider } from "~contexts/PokemonsContext";
import { ThemeContextProvider } from "~contexts/ThemeContext";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <ThemeContextProvider>
            <PokemonsContextProvider>
                <FavoritesContextProvider>
                    <App />
                </FavoritesContextProvider>
            </PokemonsContextProvider>
        </ThemeContextProvider>
    </BrowserRouter>
);
