import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Details } from "~components/Details";
import { getDetailsData } from "~services/index";
import { IDetails } from "~types/globalTypes";
import { isNotReturnedNull } from "~utils/index";

export function Pokemon() {
    const [pokemon, setPokemon] = useState({} as IDetails);
    const { name } = useParams();

    useEffect(() => {
        getDetailsData(`${name}`).then((res) => setPokemon(isNotReturnedNull(res)));
    }, [name]);

    return <Details {...pokemon} />;
}
