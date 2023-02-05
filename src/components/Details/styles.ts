import styled from "styled-components";

export const Container = styled.section`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.lg};
    justify-items: center;
`;

export const Info = styled.section`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(4, fit-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.lg};

    .Info__types {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
        justify-content: center;
    }

    .Info__bio {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .body {
        width: 100%;
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing.lg};
        justify-content: center;

        .body__item {
            width: max-content;
            height: min-content;
            display: grid;
            grid-template: repeat(2, min-content) / 100%;
            row-gap: ${({ theme }) => theme.spacing.sm};
            justify-items: center;

            .body__card {
                width: 100%;
                height: min-content;
                display: grid;
                grid-template: min-content / repeat(2, max-content);
                column-gap: ${({ theme }) => theme.spacing.sm};
                align-items: center;

                .body__icon {
                    font-size: ${({ theme }) => theme.icon.secondary};
                    color: ${({ theme }) => theme.colors.primary};
                }

                .body__name {
                    font: ${({ theme }) => theme.typography.lg};
                    color: ${({ theme }) => theme.colors.primary};
                }
            }

            .body__value {
                font: ${({ theme }) => theme.typography.md};
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }

    .stats {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: repeat(6, fit-content) / 100%;
        row-gap: ${({ theme }) => theme.spacing.sm};

        .stats__item {
            .stats__name {
                font: ${({ theme }) => theme.typography.lg};
                color: ${({ theme }) => theme.colors.primary};
                text-transform: uppercase;
                text-align: center;
            }

            .stats__value {
                font: ${({ theme }) => theme.typography.sm};
                color: ${({ theme }) => theme.colors.brand};
                text-align: center;
            }
        }
    }
`;
