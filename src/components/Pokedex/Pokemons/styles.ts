import styled from "styled-components";

export const Container = styled.section`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
`;

export const LoadMoreButton = styled.button`
    width: fit-content;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.xm} ${({ theme }) => theme.spacing.lg};
    background-color: ${({ theme }) => theme.colors.tertiary};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.main};
    cursor: pointer;
    font: ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
`;
