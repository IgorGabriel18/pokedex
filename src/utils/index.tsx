import bugImg from "~assets/types/bug.svg";
import darkImg from "~assets/types/dark.svg";
import dragonImg from "~assets/types/dragon.svg";
import electricImg from "~assets/types/electric.svg";
import fairyImg from "~assets/types/fairy.svg";
import fightingImg from "~assets/types/fighting.svg";
import fireImg from "~assets/types/fire.svg";
import flyingImg from "~assets/types/flying.svg";
import ghostImg from "~assets/types/ghost.svg";
import grassImg from "~assets/types/grass.svg";
import groundImg from "~assets/types/ground.svg";
import normalImg from "~assets/types/normal.svg";
import poisonImg from "~assets/types/poison.svg";
import psychicImg from "~assets/types/psychic.svg";
import rockImg from "~assets/types/rock.svg";
import steelImg from "~assets/types/steel.svg";
import waterImg from "~assets/types/water.svg";

export const isNotReturnedNull = (value: any) => {
    if (value !== null) {
        return value;
    }
};

export const setImage = (type: string) => {
    if (type === "bug") {
        return bugImg;
    } else if (type === "dark") {
        return darkImg;
    } else if (type === "dragon") {
        return dragonImg;
    } else if (type === "electric") {
        return electricImg;
    } else if (type === "fairy") {
        return fairyImg;
    } else if (type === "fighting") {
        return fightingImg;
    } else if (type === "fire") {
        return fireImg;
    } else if (type === "flying") {
        return flyingImg;
    } else if (type === "ghost") {
        return ghostImg;
    } else if (type === "grass") {
        return grassImg;
    } else if (type === "ground") {
        return groundImg;
    } else if (type === "normal") {
        return normalImg;
    } else if (type === "poison") {
        return poisonImg;
    } else if (type === "psychic") {
        return psychicImg;
    } else if (type === "rock") {
        return rockImg;
    } else if (type === "steel") {
        return steelImg;
    } else if (type === "water") {
        return waterImg;
    } else {
        return "";
    }
};

export const setTypeColor = (type: string) => {
    switch (type) {
        case "normal":
            return "#A8A77A";
        case "fire":
            return "#EE8130";
        case "water":
            return "#6390F0";
        case "electric":
            return "#F7D02C";
        case "grass":
            return "#7AC74C";
        case "ice":
            return "#96D9D6";
        case "fighting":
            return "#C22E28";
        case "poison":
            return "#A33EA1";
        case "ground":
            return "#E2BF65";
        case "flying":
            return "#A98FF3";
        case "psychic":
            return "#F95587";
        case "bug":
            return "#A6B91A";
        case "rock":
            return "#B6A136";
        case "ghost":
            return "#735797";
        case "dragon":
            return "#6F35FC";
        case "dark":
            return "#705746";
        case "steel":
            return "#B7B7CE";
        case "fairy":
            return "#D685AD";
        default:
            return "#FFFFFF";
    }
};
