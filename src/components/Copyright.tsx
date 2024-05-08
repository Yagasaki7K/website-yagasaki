import React from 'react'
import styled from 'styled-components'

interface CopyrightProps {
    isUwu: boolean;
}

const Copyright = ({ isUwu }: CopyrightProps) => {
    let uwu = isUwu;

    return (
        <CopyrightDetails>
            <div className={`leftContent ${uwu ? 'uwu' : 'inter'}`}>
                <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer">© 2014 - {new Date().getFullYear()} Anderson &quot;Yagasaki&quot; Marlon</a>
            </div>
        </CopyrightDetails>
    );
}

export default Copyright

const CopyrightDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;

    .inter {
        font-family: 'Inter', sans-serif;
    }

    .uwu {
        font-family: 'Milky Honey', cursive;
        src: url('../fonts//Milky\ Honey.otf') format('otf');
        src: url('../fonts//Milky\ Honey.ttf') format('ttf');
    }

    a {
        text-decoration: none;
        color: var(--font);
        font-size: 0.875rem;
    }
`