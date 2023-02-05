import { Container } from "./styles";

interface IProps {
    quantity?: number;
    total?: number;
}

export function Count(props: IProps) {
    return (
        <Container>
            Pokémons: {props.quantity && `${props.quantity} /`} {props.total}
        </Container>
    );
}
