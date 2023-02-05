import { Barbell, Ruler } from "phosphor-react";

import { IDetails } from "~types/globalTypes";

import { Hero } from "./Hero";
import { Container, Info } from "./styles";
import { Type } from "./Type";

export function Details(props: IDetails) {
    return (
        <Container>
            <Hero color={props.color} avatar={props.images?.avatar} name={props.name} />
            <Info>
                <div className="Info__types">
                    {props.types?.map((type, index) => (
                        <Type key={index} name={type.name} />
                    ))}
                </div>
                <p className="Info__bio">{props.bio}</p>
                <section className="body">
                    <div className="body__item">
                        <div className="body__card">
                            <Barbell className="body__icon" />
                            <span className="body__name">Height</span>
                        </div>
                        <p className="body__value">{props.height}m</p>
                    </div>
                    <section className="body__item">
                        <div className="body__card">
                            <Ruler className="body__icon" />
                            <span className="body__name">Weight</span>
                        </div>
                        <p className="body__value">{props.weight}kg</p>
                    </section>
                </section>
                <ul className="stats">
                    {props.stats?.map((stat, index) => (
                        <li key={index} className="stats__item">
                            <h5 className="stats__name">{stat.name}</h5>
                            <p className="stats__value">{stat.value}</p>
                        </li>
                    ))}
                </ul>
            </Info>
        </Container>
    );
}
