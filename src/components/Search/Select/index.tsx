import { CaretDown, CaretUp } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

import { PokemonsContext } from "~contexts/PokemonsContext";
import { getAllOptions, getPokemonsByFilter } from "~services/index";
import { isNotReturnedNull } from "~utils/index";

import { Container, ToggleVisibleButton, Options, Option } from "./styles";

interface IProps {
    title: "Type" | "Region" | "Generation";
}

export function Select(props: IProps) {
    const [visible, setVisible] = useState(false);
    const { pokemons, setPokemons } = useContext(PokemonsContext);
    const [options, setOptions] = useState<{ name: string }[]>([]);

    const toggleVisible = () => setVisible(!visible);
    const setType = () => {
        if (props.title === "Type") {
            return "type";
        } else if (props.title === "Region") {
            return "pokedex";
        } else if (props.title === "Generation") {
            return "generation";
        } else {
            return "";
        }
    };
    function handleClickSubmit(type: string, select: string) {
        setPokemons({
            ...pokemons,
            loading: true,
            notFound: false
        });

        getPokemonsByFilter(type, select).then((res) => {
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
                    filter: select,
                    total: res.length,
                    pokemons: res,
                    loadMore: false
                });
        });
    }

    useEffect(() => {
        isNotReturnedNull(getAllOptions(setType())).then(setOptions);
    }, []);

    return (
        <Container>
            <ToggleVisibleButton type="button" onClick={toggleVisible}>
                <span className="ToggleVisibleButton__text">{props.title}</span>
                {visible ? (
                    <CaretUp className="ToggleVisibleButton__icon" />
                ) : (
                    <CaretDown className="ToggleVisibleButton__icon" />
                )}
            </ToggleVisibleButton>
            {visible && (
                <Options>
                    {options.map((option, index) => (
                        <Option
                            key={index}
                            selected={pokemons.filter === option.name ? true : false}
                            onClick={() => handleClickSubmit(setType(), option.name)}
                        >
                            {option.name}
                        </Option>
                    ))}
                </Options>
            )}
        </Container>
    );
}
