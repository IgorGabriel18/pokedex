import { MagnifyingGlass } from "phosphor-react";

import { Container } from "./styles";

interface IProps {
    search: string;
    setSearch: (value: string) => void;
}

export function Searchbox(props: IProps) {
    return (
        <Container>
            <button className="Container__button" type="submit">
                <MagnifyingGlass className="Container__button-icon" />
            </button>
            <input
                className="Container__input"
                type="search"
                placeholder="Pikachu, Pidgeot, Arceus..."
                value={props.search}
                onChange={(ev) => props.setSearch(ev.target.value)}
                required
            />
        </Container>
    );
}
