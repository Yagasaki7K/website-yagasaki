import styled from 'styled-components'

const HorizontalRuleDetails = styled.div `

    height: auto;
    width: 100%;
    background: rgb(178, 155, 122,0.8);
    position: relative;
    padding-bottom: 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: url('../assets/home-bg.jpg');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }

    .title {
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 1.5rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #d9d6d1;
        font-weight: bold;
    }

    h2 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 1.3rem;
        color: #d9d6d1;
        font-weight: 600;
    }

    p {
        color: #1b1c1d;
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        width: 70%;
    }

    .blog-content {
        margin-right: 10%;
    }

    @media (max-width: 1366px) {
        .content {
            width: 90%;
        }
    }

`

export default HorizontalRuleDetails