import {
    ICard,
    IDetails,
    IPokemon,
    IPokemonApiResponse,
    ISearch,
    ISpecies,
    ISpeciesApiResponse
} from "~types/globalTypes";
import { isNotReturnedNull } from "~utils/index";

import { api } from "./api";

export async function getPokemonData(pokemon: string | number): Promise<IPokemon | null> {
    const endpoint = `pokemon/${pokemon}`;

    try {
        const { id, name, order, sprites, types, height, weight, stats } = await api
            .get(endpoint)
            .then((res: { data: IPokemonApiResponse }) => res.data);
        const pokemon: IPokemon = {
            id: id,
            name: name,
            order: order,
            height: height / 10,
            weight: weight / 10,
            images: {
                avatar: sprites.other["official-artwork"].front_default
            },
            types: types.map((type) => {
                return { name: type.type.name };
            }),
            stats: stats.map((stat) => {
                return { value: stat.base_stat, name: stat.stat.name };
            })
        };

        return pokemon;
    } catch (error) {
        console.log(`getPokemonData ERROR: ${error}`);

        return null;
    }
}

export async function getSpeciesData(pokemon: string | number): Promise<ISpecies | null> {
    const endpoint = `pokemon-species/${pokemon}`;

    try {
        const { color, flavor_text_entries } = await api
            .get(endpoint)
            .then((res: { data: ISpeciesApiResponse }) => res.data);
        const species: ISpecies = {
            color: color.name,
            bio: flavor_text_entries[0].flavor_text
        };

        return species;
    } catch (error) {
        console.log(`getSpeciesData ERROR: ${error}`);

        return null;
    }
}

export async function getDetailsData(pokemon: string): Promise<IDetails | null> {
    try {
        const { id, name, order, images, types, height, weight, stats } = await isNotReturnedNull(
            getPokemonData(pokemon)
        );
        const { color, bio } = await isNotReturnedNull(getSpeciesData(pokemon));

        return { id, name, order, images, types, height, weight, stats, color, bio };
    } catch (error) {
        console.log(`getDetailsData ERROR: ${error}`);

        return null;
    }
}

export async function getAllOptions(url: string): Promise<
    | {
          name: string;
      }[]
    | null
> {
    const endpoint = `${url}/?limit=1000&offset=0`;

    try {
        const { results } = await api.get(endpoint).then((res) => res.data);
        const options: { name: string }[] = results.map((result: { name: string }) => {
            return { name: result.name };
        });

        return options;
    } catch (error) {
        console.log(`getAllOptions ERROR: ${error}`);

        return null;
    }
}

export async function getAllPokemons(quantity: number): Promise<{
    count: number;
    pokemons: ICard[];
} | null> {
    const endpoint = `pokemon/?limit=${quantity}&offset=0`;

    try {
        const { count, results } = await api
            .get(endpoint)
            .then((res: { data: { count: number; results: IPokemon[] } }) => res.data);
        const pokemons: ICard[] = await Promise.all(
            results.map(async (pokemon: IPokemon) => {
                const { id, name, order, images } = await isNotReturnedNull(getPokemonData(pokemon.name));

                return { id, name, order, images };
            })
        );

        return { count, pokemons };
    } catch (error) {
        console.log(`getAllPokemons ERROR: ${error}`);

        return null;
    }
}

export async function getPokemonsByFilter(type: string, selected: string): Promise<ICard[] | null> {
    const endpoint = `${type}/${selected}`;

    try {
        switch (type) {
            case "type": {
                const { pokemon } = await api.get(endpoint).then((res: { data: ISearch }) => res.data);
                const pokemons: ICard[] = await Promise.all(
                    pokemon.map(async (pokemon) => {
                        const { id, name, order, images } = await isNotReturnedNull(
                            getPokemonData(pokemon.pokemon.name)
                        );

                        return { id, name, order, images };
                    })
                );

                return pokemons;
            }
            case "pokedex": {
                const { pokemon_entries } = await api.get(endpoint).then((res: { data: ISearch }) => res.data);
                const pokemons: ICard[] = await Promise.all(
                    pokemon_entries.map(async (pokemon) => {
                        const { id, name, order, images } = await isNotReturnedNull(
                            getPokemonData(pokemon.entry_number)
                        );

                        return { id, name, order, images };
                    })
                );

                return pokemons;
            }
            case "generation": {
                const { pokemon_species } = await api.get(endpoint).then((res: { data: ISearch }) => res.data);
                const pokemons: ICard[] = await Promise.all(
                    pokemon_species.map(async (pokemon) => {
                        const { id, name, order, images } = await isNotReturnedNull(getPokemonData(pokemon.name));

                        return { id, name, order, images };
                    })
                );

                return pokemons;
            }
            default:
                return [];
        }
    } catch (error) {
        console.log(`getPokemonsByFilter ERROR: ${error}`);

        return null;
    }
}
