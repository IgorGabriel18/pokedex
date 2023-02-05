import styled from "styled-components";

interface IColor {
    color: string;
}

export const Container = styled.main<IColor>`
    width: 100%;
    max-width: max-content;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: min-content / 100%;
    justify-items: center;
    background: linear-gradient(${({ color }) => color}, transparent, transparent);
    border-radius: ${({ theme }) => theme.border.radius.main};

    .Container__image {
        width: min(100%, 22rem);
        height: min-content;
    }
`;
