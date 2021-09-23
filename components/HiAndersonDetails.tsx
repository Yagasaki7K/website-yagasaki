import styled from 'styled-components'

export const HiAndersonDetails = styled.div`

    height: 100vh;
    text-align: left;
    width: 100%;
    padding-top: 90px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .homeBackground {
        width: 100%;
        height: 900px;
        position: relative;

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
    }
    
    .container {
        margin-left: 20%;
        margin-top: 325px;
        margin-bottom: 400px;
    }

    h1 {
        font-size: 40px;
        font-weight: 700;
        margin-top: 20%;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #fff;
    }

    h2 {
        font-size: 13px;
        letter-spacing: 5px;
        margin-top: 0;
        margin-bottom: 30px;
        text-transform: capitalize;
        color: #fff;
        font-weight: 500;
        line-height: 28px;
    }

    .socialMedia {
        display: flex;
        margin-bottom: 10%;
        
        i {
            cursor: pointer;
            margin-right: 20px;
        }
    }

    .hero {
        padding-top: 250px;
    }

    .scroll-down {
        position: absolute;
        bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .mouse {
        width: 2rem;
        height: 3.5rem;
        border: 2px solid #fff;
        border-radius: 2rem;
        margin-bottom: .5rem;
        display: flex;
    }

    .mouse span {
        width: 1rem;
        height: 1rem;
        background: #fff;
        display: block;
        border-radius: 50%;
        margin: auto;
        animation: move-wheel 1.5s linear infinite;
    }

    .arrow span {
        display: block;
        width: 1rem;
        height: 1rem;
        border: 2px solid transparent;
        border-right-color:#fff;
        border-bottom-color:#fff;
        transform: rotate(45deg);
        animation: arrow-down 0.80s alternate infinite;
    }

    @keyframes move-wheel {
        0% {
            opacity: 0;
            transform: translateY(-1rem);
        }

        100% {
            opacity: 1;
            transform: translateY(1rem);
        }
    }

    @keyframes arrow-down {
        0% {
            opacity: 0;
        }

        25% {
            opacity: .25;
        }

        50% {
            opacity: .5;
        }

        75% {
            opacity: .75;
        }

        100% {
            opacity: 1;
        }
    }

    @media (max-width: 1370px) {
        height: 400px;

        .hero {
            padding-top: 20px;
            margin-top: -100px;
        }
    }
`
    
export default HiAndersonDetails
