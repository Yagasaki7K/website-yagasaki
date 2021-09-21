import styled from 'styled-components'

export const NavMenuDetails = styled.div `
    background: #1B1C1D;
    width: 100%;
    height: 75px;
    padding: 3rem;
    padding-left: 5rem;
    padding-right: 5rem;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;

    li {
        display: inline;
        margin-right: 75px;
        font-weight: bold;
    }

    a {
        color: #999999;
    }

    a img {
        width: 6rem;
        margin-top: -0.6rem;
        margin-left: 6rem;
    }

    a:hover {
        transition: 1.5s;
        color: #BE9D7B;
    }
`

export default NavMenuDetails