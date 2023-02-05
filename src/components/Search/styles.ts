import styled from "styled-components";

export const Container = styled.section`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: grid;
    grid-template: repeat(3, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.sm};
`;

export const BoxSelect = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    justify-content: center;
`;

export const ResetAllButton = styled.button`
    width: max-content;
    height: min-content;
    margin-left: auto;
    padding: ${({ theme }) => theme.spacing.xm} ${({ theme }) => theme.spacing.lg};
    background-color: ${({ theme }) => theme.colors.tertiary};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.main};
    cursor: pointer;
    font: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.primary};
`;
