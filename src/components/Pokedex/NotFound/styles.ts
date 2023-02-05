import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.xxl} 0;

    .Container__title {
        font: ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.brand};
        text-align: center;
    }
`;
