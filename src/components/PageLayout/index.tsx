import { IChildren } from "~types/globalTypes";

import { Container } from "./styles";

export function PageLayout(props: IChildren) {
    return <Container>{props.children}</Container>;
}
