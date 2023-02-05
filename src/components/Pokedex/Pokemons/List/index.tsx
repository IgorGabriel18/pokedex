import { DotsThreeCircleVertical, PushPin, PushPinSlash } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import pokeball_img from "~assets/icons/pokeball.svg";
import { FavoritesContext } from "~contexts/FavoritesContexts";
import { ICard } from "~types/globalTypes";

import { Container, Item } from "./styles";

interface IProps {
    pokemons: ICard[];
}

export function List(props: IProps) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

    return (
        <Container>
            {props.pokemons.map((pokemon) => (
                <Item key={pokemon.id}>
                    <img className="Item__pokeball" src={pokeball_img} alt="Pokeball" />
                    <section className="Item__section">
                        <span className="Item__section-order">#{pokemon.order}</span>
                        <button
                            className="Item__section-button"
                            type="button"
                            onClick={() =>
                                isFavorite(pokemon.id) ? removeFromFavorites(pokemon.id) : addToFavorites(pokemon)
                            }
                        >
                            {isFavorite(pokemon.id) ? (
                                <PushPinSlash className="Item__section-icon" />
                            ) : (
                                <PushPin className="Item__section-icon" />
                            )}
                        </button>
                        <Link className="Item__section-button" to={`/pokemon/${pokemon.name}`}>
                            <DotsThreeCircleVertical className="Item__section-icon" />
                        </Link>
                    </section>
                    <figure className="Item__figure">
                        <img className="Item__figure-avatar" src={pokemon.images.avatar} alt={pokemon.name} />
                        <figcaption className="Item__figure-name">{pokemon.name}</figcaption>
                    </figure>
                </Item>
            ))}
        </Container>
    );
}
