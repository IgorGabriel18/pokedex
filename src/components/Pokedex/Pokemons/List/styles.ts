import styled from "styled-components";

export const Container = styled.ul`
    width: 100%;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
    justify-content: center;
`;

export const Item = styled.li`
    position: relative;
    z-index: 0;
    width: min(100%, 15rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xm};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.border.radius.main};
    overflow: hidden;

    .Item__pokeball {
        position: absolute;
        inset: 50% 0 0 50%;
        z-index: 1;
        width: 8rem;
        height: 8rem;
        opacity: ${({ theme }) => (theme.colors.main === "#ecfeff" ? 0.1 : 1)};
        transform: translate(-50%, -50%);
    }

    .Item__section {
        position: relative;
        z-index: 2;
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: min-content / 1fr repeat(2, max-content);
        column-gap: ${({ theme }) => theme.spacing.sm};
        align-items: center;

        .Item__section-order {
            font: ${({ theme }) => theme.typography.md};
            color: ${({ theme }) => theme.colors.brand};
        }

        .Item__section-button {
            width: max-content;
            height: min-content;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        .Item__section-icon {
            font-size: ${({ theme }) => theme.icon.secondary};
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    .Item__figure {
        position: relative;
        z-index: 2;
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: repeat(2, min-content) / 100%;
        row-gap: ${({ theme }) => theme.spacing.xm};
        justify-items: center;

        .Item__figure-avatar {
            width: 6rem;
            height: 6rem;
        }

        .Item__figure-name {
            font: ${({ theme }) => theme.typography.md};
            color: ${({ theme }) => theme.colors.primary};
            text-align: center;
            text-transform: capitalize;
        }
    }
`;
