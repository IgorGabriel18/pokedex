import { List, X, Sun, MoonStars } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo_img from "~assets/icons/logo.svg";
import { ThemeContext } from "~contexts/ThemeContext";
import { useScreen } from "~hooks/useScreen";

import { Button, Container, Logo, Nav, SubContainer } from "./styles";

export function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { sizeScreen } = useScreen();

    const [visible, setVisible] = useState(false);
    const toggleVisible = () => setVisible(!visible);
    const paths = [
        {
            url: "/",
            name: "Home"
        },
        {
            url: "/favorites",
            name: "Favorites"
        }
    ];

    useEffect(() => {
        sizeScreen < 640 && setVisible(false);
    }, [sizeScreen]);

    return (
        <Container>
            <SubContainer>
                <Logo src={logo_img} alt="Logo" />
                {sizeScreen < 640 && (
                    <Button type="button" onClick={toggleVisible}>
                        {!visible ? <List className="Button__icon" /> : <X className="Button__icon" />}
                    </Button>
                )}
                {(visible || sizeScreen >= 640) && (
                    <Nav>
                        {paths.map((element, index) => (
                            <Link to={element.url} key={index} className="Nav__link">
                                {element.name}
                            </Link>
                        ))}
                        <Button type="button" onClick={toggleTheme}>
                            {!theme ? <Sun className="Button__icon" /> : <MoonStars className="Button__icon" />}
                        </Button>
                    </Nav>
                )}
            </SubContainer>
        </Container>
    );
}
