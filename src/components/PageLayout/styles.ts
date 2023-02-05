import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: min-content;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.xm} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xxl};
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing.xxl};
    align-items: center;
    background-color: ${({ theme }) => theme.colors.main};
`;
