import styled from 'styled-components'

const IntroduceMeDetails = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    padding: 5rem 0 7rem 28rem;
    color: #999;
    display: flex;

    img {
        box-shadow: rgb(190, 157, 123, 0.5) -5px 5px, rgb(190, 157, 123, 0.4) -10px 10px, rgb(190, 157, 123, 0.3) -15px 15px, 
        rgb(190, 157, 123, 0.2) -20px 20px, rgb(190, 157, 123, 0.1) -25px 25px;
    }

    .resize {
        margin-top: -23rem;
        margin-left: 26rem;
        width: auto;
    }

    h1 {
        font-size: 28px;
        font-family: 'Playfair Display', serif;
        margin-bottom: 20px;
    }

    p {
        font-family: 'Poppins', helvetica;
        margin-bottom: 20px;
        font-size: 16px;
        width: 60%;
        line-height: 28px;
    }

    a {
        color: #c2c2c2;

        :hover {
            color: #b8a07e;
        }
    }

    .button {
        color: #1B1C1D;
        background: #b8a07e;
        border: none;
        border-radius: 2%;
        padding: 0.4rem;
        cursor: pointer;
        width: 150px;
        font-family: 'Poppins', helvetica;

        :hover {
            transition: 2s;
            background: #fff;
        }
    }

    @media screen and (max-width: 1366px) {
        padding: 2rem 0 7rem 17rem;

        img {
            margin-top: 20rem;
        }

        .resize {
            margin-top: -25rem;
            p {
                width: 80%;
            }
        }

        h1 {
            padding-top: 2rem;
        }
    }
`

export default IntroduceMeDetails