import { Container } from "./styles";

export function Loading() {
    return (
        <Container>
            <img className="Container__img" src="https://i.gifer.com/2iiJ.gif" alt="Loading" />
            <figcaption className="Container__title">Loading...</figcaption>
        </Container>
    );
}
