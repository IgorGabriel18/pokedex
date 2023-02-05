import styled from "styled-components";

export const Container = styled.p`
    width: 100%;
    height: min-content;
    font: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.primary};
`;
