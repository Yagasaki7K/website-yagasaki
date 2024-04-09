import React from 'react'
import styled from 'styled-components'

const Copyright = () => {
    return (
        <CopyrightDetails>
            <div className="copyright">
                <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer">© 2014 - {new Date().getFullYear()} Anderson &quot;Yagasaki&quot; Marlon</a>
            </div>
        </CopyrightDetails>
    )
}

export default Copyright

const CopyrightDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;

    a {
        text-decoration: none;
        color: var(--font);
        font-size: 0.875rem;
    }
`