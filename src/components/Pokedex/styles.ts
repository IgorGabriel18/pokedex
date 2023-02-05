import styled from "styled-components";

export const Container = styled.section`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
`;
