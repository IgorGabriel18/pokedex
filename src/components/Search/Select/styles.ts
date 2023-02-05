import styled from "styled-components";

interface ISelected {
    selected: boolean;
}

export const Container = styled.div`
    position: relative;
    width: 14rem;
    height: min-content;
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing.sm};
`;

export const ToggleVisibleButton = styled.button`
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: min-content / repeat(2, max-content);
    column-gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.main};
    cursor: pointer;

    .ToggleVisibleButton__text {
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.primary};
    }

    .ToggleVisibleButton__icon {
        font-size: ${({ theme }) => theme.icon.secondary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Options = styled.div`
    width: 100%;
    height: 10rem;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing.sm};
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.border.radius.main};
    overflow-y: scroll;
`;

export const Option = styled.button<ISelected>`
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    background-color: ${({ selected }) => (selected ? ({ theme }) => theme.colors.brand : "transparent")};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.main};
    cursor: pointer;
    font: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
    text-transform: capitalize;
`;
