import { createContext, useEffect, useState } from "react";

import { ICard, IChildren, IPokedex } from "~types/globalTypes";

interface IFavoritesContext {
    favorites: IPokedex;
    setFavorites: (value: IPokedex) => void;
    isFavorite: (id: number) => boolean;
    addToFavorites: (value: ICard) => void;
    removeFromFavorites: (id: number) => void;
}

export const FavoritesContext = createContext({} as IFavoritesContext);
const INITIAL_STATE = {
    loading: false,
    notFound: false,
    total: 0,
    pokemons: []
};

export function FavoritesContextProvider(props: IChildren) {
    const [favorites, setFavorites] = useState<IPokedex>(INITIAL_STATE);

    const isFavorite = (id: number) => favorites.pokemons.some((pokemon) => pokemon.id === id);
    const addToFavorites = (pokemon: ICard) => {
        setFavorites((prevState) => {
            return {
                ...prevState,
                pokemons: [...prevState.pokemons, pokemon]
            };
        });
        setFavorites((prevState) => {
            return {
                ...prevState,
                total: prevState.pokemons.length
            };
        });
    };
    const removeFromFavorites = (id: number) => {
        setFavorites((prevState) => {
            return {
                ...prevState,
                pokemons: prevState.pokemons.filter((pokemon) => pokemon.id !== id)
            };
        });
        setFavorites((prevState) => {
            return {
                ...prevState,
                total: prevState.pokemons.length
            };
        });
    };

    useEffect(() => {
        setFavorites((prevState) => {
            return {
                ...prevState,
                loading: true,
                notFound: false
            };
        });

        setFavorites((prevState) => {
            return {
                ...prevState,
                loading: false,
                notFound: prevState.pokemons.length > 0 ? false : true
            };
        });
    }, [favorites.pokemons]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, isFavorite, addToFavorites, removeFromFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
