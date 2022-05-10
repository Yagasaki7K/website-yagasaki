import styled from 'styled-components'

const HomeDetails = styled.div`
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0px 16px;
    font-family: 'Poppins', sans-serif;
    background: #15202b;
    line-height: 10px;

    img {
        border: 6px solid #fefdff;
        border-radius: 25%;
        height: 256px;
        width: 256px;
        margin-right: 15px;
    }

    @media screen and (max-width: 700px) {
        display: block;
        padding-top: 6rem;
        padding-left: 3rem;
    }

    h2 {
        color: #fefdff;
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.25;
        letter-spacing: 1px;
        margin: 0px;
        position: relative;
        z-index: 1;
    }

    h2:hover span {
        display: none;
    }

    h2:hover:before {
        content: "✨ 葛城 矢ヶ崎 ✨";
    }

    h4:hover span {
        display: none;
    }

    h4:hover:before {
        content: "フロントエンドの開発者";
    }

    h4 {
        color: #fefdff;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.25;
        letter-spacing: 1px;
        margin: 0px;
    }

    p {
        color: #fefdff;
        font-size: 0.8rem;
        margin-top: 8px;
        
    }

    i {
        color: #a8abfc;
        font-size: 24px;
        margin-right: 10px;

        :hover {
            color: #5857a8;
            transition: 1s;
        }
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #a8abfc;
    }

    .hover-underline-animation:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background: #a8abfc;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export default HomeDetails