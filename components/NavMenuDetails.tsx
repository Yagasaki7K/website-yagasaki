import styled from 'styled-components'

export const NavMenuDetails = styled.div `
    background: #B59D7C;
    width: 100%;
    height: 75px;
    padding-right: 2rem;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
        display: inline;
        margin-right: 75px;
        font-weight: bold;
    }

    a img {
        width: 6rem;
        margin-top: -0.6rem;
        margin-left: 6rem;
    }

    a:hover {
        transition: 2s;
        color: #d3d2d2;
    }
`

export default NavMenuDetails