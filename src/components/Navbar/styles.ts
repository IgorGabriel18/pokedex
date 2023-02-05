import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.main};

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.sm}) {
        padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    }
`;

export const SubContainer = styled.section`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    margin-inline: auto;
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 10rem;
    height: min-content;
`;

export const Button = styled.button`
    width: max-content;
    height: min-content;
    background-color: transparent;
    border: none;
    cursor: pointer;

    .Button__icon {
        font-size: ${({ theme }) => theme.icon.primary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Nav = styled.nav`
    position: absolute;
    inset: 100% 0 0 0;
    z-index: 5;
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(3, min-content) / 100%;
    gap: ${({ theme }) => theme.spacing.lg};
    justify-items: center;
    background-color: ${({ theme }) => theme.colors.main};

    .Nav__link {
        font: ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.primary};
        transition: ${({ theme }) => theme.transition};

        :hover {
            color: ${({ theme }) => theme.colors.brand};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.sm}) {
        position: relative;
        inset: 0;
        padding: 0;
        display: grid;
        grid-template: min-content / repeat(3, max-content);
        justify-content: right;
        align-items: center;
    }
`;
