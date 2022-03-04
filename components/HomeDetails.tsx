import styled from 'styled-components'

const HomeDetails = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    :root {
        --header-height: 3rem;
        --hue-color: 250;

        --first-color: hsl(var(--hue-color), 69%, 61%);
        --first-color-second: hsl(var(--hue-color), 69%, 61%);
        --first-color-alt: hsl(var(--hue-color), 57%, 53%);
        --first-color-lighter: hsl(var(--hue-color), 57%, 53%);
        --title-color: hsl(var(--hue-color), 8%, 15%);
        --text-color: hsl(var(--hue-color), 8%, 45%);
        --text-color-light: hsl(var(--hue-color), 8%, 65%);
        --input-color: hsl(var(--hue-color), 70%, 96%);
        --body-color: hsl(var(--hue-color), 60%, 99%);
        --container-color: #fff;

        --body-font: 'Poppins', sans-serif;

        --big-font-size: 2rem;
        --h1-font-size: 1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1.125rem;
        --normal-font-size: .938rem;
        --small-font-size: .813rem;
        --smaller-font-size: .75rem;

        --font-medium: 500;
        --font-semi-bold: 600;

        --mb-0-25: .25rem;
        --mb-0-5: .5rem;
        --mb-0-75: .75rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;
        --mb-2-5: 2.5rem;
        --mb-3: 3rem;

        --z-tooltip: 10;
        --z-fixed: 100;
        --z-modal: 1000;
    }

    @media screen and (min-width: 968px) {
        :root {
            --big-font-size:;
            --h1-font-size:;
            --h2-font-size:;
            --h3-font-size:;
            --normal-font-size:;
            --small-font-size:
            --smaller-font-size:;
        }
    }

`

export default HomeDetails