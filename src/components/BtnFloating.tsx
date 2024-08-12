import styled from "styled-components";

const FloatingButton = () => {
    return (
        <FloatingButtonStyle>
            <a href="https://byteone.vercel.app/suporte" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-bug"></i>
            </a>
        </FloatingButtonStyle>
    );
};

const FloatingButtonStyle = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    bottom: 35px;
    right: 40px;
    background: var(--red);
    border-radius: 50%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: 1s;

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }

    i {
        font-size: 2rem;
        color: var(--white);
    }
`

export default FloatingButton;
