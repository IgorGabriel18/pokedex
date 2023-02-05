import { IPokedex } from "~types/globalTypes";

import { Loading } from "./Loading";
import { NotFound } from "./NotFound";
import { Pokemons } from "./Pokemons";
import { Container } from "./styles";

export function Pokedex(props: IPokedex) {
    return (
        <Container>
            {props.loading ? (
                <Loading />
            ) : props.notFound ? (
                <NotFound />
            ) : (
                <Pokemons
                    quantity={props.quantity}
                    total={props.total}
                    pokemons={props.pokemons}
                    loadMore={props.loadMore}
                />
            )}
        </Container>
    );
}
