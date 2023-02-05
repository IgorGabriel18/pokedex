import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: min-content / max-content 1fr;
    column-gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.border.radius.main};

    .Container__button {
        width: max-content;
        height: min-content;
        background-color: transparent;
        border: none;
        cursor: pointer;

        .Container__button-icon {
            font-size: ${({ theme }) => theme.icon.secondary};
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    .Container__input {
        width: 100%;
        height: min-content;
        background-color: transparent;
        border: none;
        outline: none;
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.primary};
    }
`;
