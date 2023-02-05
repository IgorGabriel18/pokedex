import { useContext } from "react";

import { HeroSection } from "~components/HeroSection";
import { Pokedex } from "~components/Pokedex";
import { Search } from "~components/Search";
import { PokemonsContext } from "~contexts/PokemonsContext";

export function Home() {
    const { pokemons } = useContext(PokemonsContext);

    return (
        <>
            <HeroSection />
            <Search />
            <Pokedex {...pokemons} />
        </>
    );
}
