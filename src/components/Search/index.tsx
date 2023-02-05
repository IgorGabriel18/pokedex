import { FormEvent, useContext, useState } from "react";

import { PokemonsContext } from "~contexts/PokemonsContext";
import { getAllPokemons, getPokemonData } from "~services/index";
import { isNotReturnedNull } from "~utils/index";

import { Searchbox } from "./Searchbox";
import { Select } from "./Select";
import { BoxSelect, Container, ResetAllButton } from "./styles";

export function Search() {
    const [search, setSearch] = useState("");
    const { pokemons, setPokemons } = useContext(PokemonsContext);

    function handleSubmitSearch(ev: FormEvent) {
        ev.preventDefault();

        setPokemons({
            ...pokemons,
            loading: true,
            notFound: false
        });
        getPokemonData(search.toLowerCase()).then((res) => {
            res === null &&
                setPokemons({
                    ...pokemons,
                    loading: false,
                    notFound: true
                });
            res !== null &&
                setPokemons({
                    ...pokemons,
                    loading: false,
                    notFound: false,
                    pokemons: [res],
                    loadMore: false
                });
        });

        setSearch("");
    }
    function handleClickResetSearch() {
        setPokemons({
            ...pokemons,
            loading: true,
            notFound: false
        });

        getAllPokemons(20).then((res) => {
            res === null &&
                setPokemons({
                    ...pokemons,
                    loading: false,
                    notFound: true
                });
            res !== null &&
                setPokemons({
                    ...pokemons,
                    total: res.count,
                    filter: "",
                    loading: false,
                    notFound: false,
                    pokemons: res.pokemons,
                    loadMore: isNotReturnedNull(pokemons.quantity) > res.count ? false : true
                });
        });

        setSearch("");
    }

    return (
        <Container onSubmit={handleSubmitSearch}>
            <Searchbox search={search} setSearch={setSearch} />
            <BoxSelect>
                <Select title="Type" />
                <Select title="Region" />
                <Select title="Generation" />
            </BoxSelect>
            <ResetAllButton type="button" onClick={handleClickResetSearch}>
                reset all
            </ResetAllButton>
        </Container>
    );
}
