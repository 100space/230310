import styled from "styled-components"

export const Nav = styled.div`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li {
        margin-left: 1.5rem;
    }
    a {
        color: #fff;
        height: 100%;
        padding: 0.5rem;
        &:hover {
            color: #eee;
        }
    }
    ul > li > ul {
        display: none;
    }
    li:nth-last-child(1):hover {
    }

    li:nth-last-child(1):hover > ul {
        display: block;
        position: absolute;
        right: 2rem;
        top: 6rem;
        font-size: 1.6rem;
    }
    li:nth-last-child(1):hover > ul > li {
        margin-top: 1rem;
        width: fit-content;
    }
    font-size: 2rem;
`
