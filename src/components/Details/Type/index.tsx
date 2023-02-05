import { setImage } from "~utils/index";

import { Container } from "./styles";

interface IProps {
    name: string;
}

export function Type(props: IProps) {
    return (
        <Container color={props.name}>
            <img src={setImage(props.name)} alt={props.name} className="Type__image" />
            <figcaption className="Type__name">{props.name}</figcaption>
        </Container>
    );
}
