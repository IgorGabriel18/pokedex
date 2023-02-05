import { Container } from "./styles";

interface IProps {
    color: string;
    avatar: string;
    name: string;
}

export function Hero(props: IProps) {
    return (
        <Container color={props.color}>
            <img src={props.avatar} alt={props.name} className="Hero__image" />
        </Container>
    );
}
