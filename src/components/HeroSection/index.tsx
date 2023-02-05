import pikachu_img from "~assets/images/pikachu.png";
import { useScreen } from "~hooks/useScreen";

import { Container, Details, Image } from "./styles";

export function HeroSection() {
    const { sizeScreen } = useScreen();

    return (
        <Container>
            <Details>
                <h1 className="Details__title">
                    Discover the Pokémon world with our <span className="Details__title--variant">Pokedex</span>
                </h1>
                <p className="Details__text">
                    Explore, learn, and journey through the Pokémon universe with our Pokedex. Don't miss the chance to
                    become a <span className="Details__text--variant">Pokémon master</span>!
                </p>
            </Details>
            {sizeScreen >= 768 && <Image src={pikachu_img} alt="Pikachu" />}
        </Container>
    );
}
