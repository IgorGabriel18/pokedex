import styled from "styled-components";

export const Container = styled.section`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.md}) {
        display: grid;
        grid-template: min-content / 1.25fr 1.75fr;
        justify-items: center;
        align-items: center;
    }
`;

export const Details = styled.section`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.sm};

    .Details__title {
        font: ${({ theme }) => theme.typography.xxl};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;

        .Details__title--variant {
            color: ${({ theme }) => theme.colors.brand};
        }
    }

    .Details__text {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;

        .Details__text--variant {
            color: ${({ theme }) => theme.colors.brand};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.md}) {
        .Details__title,
        .Details__text {
            text-align: left;
        }
    }
`;

export const Image = styled.img`
    width: min(100%, 28rem);
    height: min-content;
`;
