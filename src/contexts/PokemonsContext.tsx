import { createContext, useEffect, useState } from "react";

import { getAllPokemons } from "~services/index";
import { IChildren, IPokedex } from "~types/globalTypes";
import { isNotReturnedNull } from "~utils/index";

interface IPokemonsContext {
    pokemons: IPokedex;
    setPokemons: (value: IPokedex) => void;
    handleClickLoadMore: () => void;
}

export const PokemonsContext = createContext({} as IPokemonsContext);
const INITIAL_STATE = {
    loading: false,
    notFound: false,
    filter: "",
    quantity: 20,
    total: 20,
    pokemons: [],
    loadMore: false
};

export function PokemonsContextProvider(props: IChildren) {
    const [pokemons, setPokemons] = useState<IPokedex>(INITIAL_STATE);

    const handleClickLoadMore = () =>
        setPokemons((prevState) => {
            return {
                ...prevState,
                quantity: isNotReturnedNull(pokemons.quantity) + 20
            };
        });

    useEffect(() => {
        setPokemons((prevState) => {
            return {
                ...prevState,
                loading: true,
                notFound: false
            };
        });

        getAllPokemons(isNotReturnedNull(pokemons.quantity)).then((res) => {
            res === null &&
                setPokemons((prevState) => {
                    return {
                        ...prevState,
                        loading: false,
                        notFound: true
                    };
                });
            res !== null &&
                setPokemons((prevState) => {
                    return {
                        ...prevState,
                        total: res.count,
                        loading: false,
                        notFound: false,
                        pokemons: res.pokemons,
                        loadMore: isNotReturnedNull(prevState.quantity) > res.count ? false : true
                    };
                });
        });
    }, [pokemons.quantity]);

    return (
        <PokemonsContext.Provider value={{ pokemons, setPokemons, handleClickLoadMore }}>
            {props.children}
        </PokemonsContext.Provider>
    );
}
