import styled from "styled-components";

export const Container = styled.figure`
    width: max-content;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.lg};

    .Container__img {
        width: 14rem;
        height: min-content;
    }

    .Container__title {
        font: ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }
`;
