import styled from 'styled-components'

const ContactMeDetails = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 75px;
    margin-bottom: 75px;
    
    .leftContent {
        margin-left: 300px;
        
        img {
            width: 25%;
        }

        h2 {
            font-weight: 700;
            font-size: 1.7rem;
        }

        .adress {
            color: #898989;
        }

        .email {
            margin-bottom: 20px;
        }

        p {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .button {
        color: #1B1C1D;
        background: #b8a07e;
        border: none;
        border-radius: 2%;
        padding: 0.5rem;
        cursor: pointer;
        width: 160px;
        margin-right: 20px;
        font-family: 'Poppins', helvetica;

            :hover {
                transition: 2s;
                background: #fff;
            }
        }
    }

    .rightContent {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-right: 300px;
        
        
        .content {
            i {
                font-size: 2.5rem;
                color: #898989;
                margin-right: 20px;
                margin-top: 70px;
                margin-bottom: 20px;

                :hover {
                    transition: 1.5s;
                    color: #b8a07e
                }
            }
        }

        .socialMedia {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            color: #898989;
        }

        a {
            color: #d9d6d1;

            :hover {
                transition: 1.5s;
                color: #b8a07e;
            }
        }

        .contentCopyright {
            .copyright {
                font-weight: bold;
            }

            .copyright2 {
                margin-left: 15%;
            }
        }
    }

    @media (max-width: 1366px) {
        .leftContent {
            margin-left: 150px;
        }

        .rightContent {
            margin-top: -20px;
            margin-left: -0px;
        }

        .socialMedia {
            margin-left: 200px;
        }

        .contentCopyright {
            margin-left: 100px;

            .copyright {
                margin-left: 72px;
                margin-bottom: 20px;
            }

            .copyright2 {
            }
        }
    }
`

export default ContactMeDetails