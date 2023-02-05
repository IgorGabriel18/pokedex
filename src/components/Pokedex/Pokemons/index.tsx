import { useContext } from "react";

import { PokemonsContext } from "~contexts/PokemonsContext";
import { ICard } from "~types/globalTypes";

import { Count } from "./Count";
import { List } from "./List";
import { Container, LoadMoreButton } from "./styles";

interface IProps {
    quantity?: number;
    total?: number;
    pokemons: ICard[];
    loadMore?: boolean;
}

export function Pokemons(props: IProps) {
    const { handleClickLoadMore } = useContext(PokemonsContext);

    return (
        <Container>
            {props.total && <Count quantity={props.quantity} total={props.total} />}
            <List pokemons={props.pokemons} />
            {props.loadMore && <LoadMoreButton onClick={handleClickLoadMore}>Load more pokémons</LoadMoreButton>}
        </Container>
    );
}
