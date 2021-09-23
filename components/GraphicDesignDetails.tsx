import styled from 'styled-components'

const GraphicDesignDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h2 {
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 1.5rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #d9d6d1;
        font-weight: bold;
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        width: 60%;
        margin-bottom: 50px;
    }

    @media (max-width: 1366px) {
        .content {
            width: 80%;
        }
    }
`

export default GraphicDesignDetails