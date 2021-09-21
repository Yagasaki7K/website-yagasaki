import styled from 'styled-components'

const FeaturesDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    grid-area: firstArea, secondArea, thirdArea, fourthArea;
    width: 100%;
    height: 225px;
    background-image: url('/assets/home-bg.jpg');
    background-attachment: fixed;

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

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgb(178, 155, 122,0.9);
        z-index: -1;
        filter: blur(20px)
    }
`
    
export default FeaturesDetails
