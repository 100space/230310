import styled from "styled-components"

export const Nav = styled.div`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }
    li {
        margin-left: 1.5rem;
    }
    a {
        position: relative;
        color: #fff;
        height: 100%;
        padding: 0.5rem;
        &:hover {
            color: #eee;
        }
    }
    a::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        scale: 0 1;
        transform-origin: left;
        transition: scale 0.25s;
        background-color: red;
    }
    a:hover::before {
        scale: 1;
    }

    ul > li > ul {
        display: none;
    }

    li:nth-last-child(1):hover {
    }

    li:nth-last-child(1):hover > ul {
        display: flex;
        position: absolute;
        right: 2rem;
        top: 6rem;
        font-size: 1.6rem;
    }
    li:nth-last-child(1):hover > ul > li {
        margin-top: 1rem;
        width: fit-content;
    }
    font-size: 2.4rem;
`
