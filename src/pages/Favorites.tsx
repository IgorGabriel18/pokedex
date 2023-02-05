import { useContext } from "react";

import { Pokedex } from "~components/Pokedex";
import { FavoritesContext } from "~contexts/FavoritesContexts";

export function Favorites() {
    const { favorites } = useContext(FavoritesContext);

    return <Pokedex {...favorites} />;
}
