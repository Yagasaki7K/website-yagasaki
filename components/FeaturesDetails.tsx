import styled from 'styled-components'

const FeaturesDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    grid-area: firstArea, secondArea, thirdArea, fourthArea;

    @media (max-width: 1366px) {

        .firstArea {
            margin-left: 100px;
        }
        .fourthArea {
            display: none;
        }
    }
    
    height: 250px;
    width: 100%;
    position: relative;
    padding-bottom: 60px;
    background: rgb(178, 155, 122,0.8);

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

    div {
        padding: 3.5rem;
        width: 375px;
        margin-left: 25px;

        h4 {
            text-decoration: uppercase;
            font-weight: bold;
        }

        i {
            font-size: 35px;
            margin-bottom: 10px;
        }

        p {
            font-size: 0.9rem;
        }
    }
`
    
export default FeaturesDetails
