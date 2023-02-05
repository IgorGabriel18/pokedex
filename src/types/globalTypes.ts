import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode;
}

export interface IPokemonApiResponse {
    id: number;
    name: string;
    order: number;
    sprites: { other: { "official-artwork": { front_default: string } } };
    types: [{ type: { name: string } }];
    height: number;
    weight: number;
    stats: { base_stat: number; stat: { name: string } }[];
}

export interface ISpeciesApiResponse {
    color: { name: string };
    flavor_text_entries: [{ flavor_text: string }];
}

export interface IPokemon {
    id: number;
    name: string;
    order: number;
    images: { avatar: string };
    types: { name: string }[];
    height: number;
    weight: number;
    stats: {
        value: number;
        name: string;
    }[];
}

export interface ISpecies {
    color: string;
    bio: string;
}

export interface ISearch {
    pokemon: [{ pokemon: { name: string } }];
    pokemon_entries: [{ entry_number: number; pokemon_species: { name: string } }];
    pokemon_species: [{ name: string }];
}

export interface ICard {
    id: number;
    name: string;
    order: number;
    images: { avatar: string };
}

export interface IDetails {
    id: number;
    name: string;
    order: number;
    color: string;
    bio: string;
    images: { avatar: string };
    types: [{ name: string }];
    height: number;
    weight: number;
    stats: {
        value: number;
        name: string;
    }[];
}

export interface IPokedex {
    loading: boolean;
    notFound: boolean;
    filter?: string;
    quantity?: number;
    total?: number;
    pokemons: ICard[];
    loadMore?: boolean;
}
