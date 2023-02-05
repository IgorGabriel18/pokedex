import styled from "styled-components";

import { setTypeColor } from "~utils/index";

interface IColor {
    color: string;
}

export const Container = styled.figure<IColor>`
    width: 8rem;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: min-content / repeat(2, max-content);
    column-gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
    align-items: center;
    background-color: ${({ color }) => setTypeColor(color)};
    border-radius: ${({ theme }) => theme.border.radius.main};

    .Type__image {
        width: ${({ theme }) => theme.icon.secondary};
        height: ${({ theme }) => theme.icon.secondary};
    }

    .Type__name {
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
    }
`;
