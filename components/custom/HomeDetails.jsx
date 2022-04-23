import styled from 'styled-components'

const HomeDetails = styled.div`

padding-top: 20px;
background: #191627;
color: #e5e5e5;

ul {
    display: flex;
    justify-content: center;
    margin-left: 100px;

    li {
        margin-right: 100px;
        font-size: 20px;
        color: #9278ec;
        font-weight: bold;
        text-transform: uppercase;

        img {
            width: 50px;
            margin-top: -10px;
        }
    }
}

h2 {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 900;
}

p {
    font-size: 18px;
    font-family: 'Fira Sans', sans-serif;
}

.line {
    width: 100%;
    background: #9278ec;
}

.right {
    width: 100%;
    background: #9278ec;
}

.firstImg {
    margin: 50px 0 0 100px;
    width: 80%;
}

.secondImg {
    margin: 50px 100px 0 0;
    width: 90%;
}

a {
    color: #9278ec;
    outline: none;
    text-decoration: none;
    background-image: linear-gradient(#9278ec, #9278ec);
    background-size: 100% .5em;
    background-repeat: no-repeat;
    background-position: left 0 bottom -50%;
}

a:hover {
    transition: .5s;
    text-decoration: none;
    color: #fff;
}

#footer {
    text-align: center;
    font-weight: 200;
    font-family: 'Fira Sans', sans-serif;
    font-size: 12px;
    padding-bottom: 25px;
}

#copyright {
    font-weight: 900;
    font-size: 16px;
    font-family: 'Fira Sans', sans-serif;
    padding: 4em 0;
}

#social {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    i {
        font-size: 35px;
        margin-right: 20px;

        :hover {
            transition: .5s;
            color: #9278ec;
        }
    }
}

#social :not(.social) {
    background: none;
    background-position: bottom 0%;
}

/* Dispositivos small (telefones em modo paisagem, com 576px ou mais) */
@media (min-width: 576px) {  
    #text-container {
        margin: 0 auto;
        width: 50%;
        text-align: left;  
    }

    #text-container2 {
        margin: 0 auto;
        width: 50%;
        text-align: left;
    }
    
}

/* Dispositivos médios (tablets com 768px ou mais) */
@media (max-width: 768px) { 
    #text-container {
        margin: 0 auto;
        width: 100%;
        text-align: left;  
    }

    #text-container2 {
        margin: 0 auto;
        width: 100%;
        text-align: right;
    }

    p {
        font-size: 11px;
    }
 }

/* Dispositivos large (desktops com 992px ou mais) */
@media (min-width: 769px) {
    #text-container {
        margin: 0 auto;
        width: 50%;
        text-align: left;  
    }

    #text-container2 {
        margin: 0 auto;
        width: 60%;
        text-align: right;
        margin-top: -60px;
    }

    h2 {
        margin-top: 50px;
    }
 }

/* Dispositivos extra large (desktops grandes com 1200px ou mais) */
@media (min-width: 1200px) { 
    #text-container {
        margin: 0 auto;
        width: 50%;
        text-align: left;  
    }

    #text-container2 {
        margin: 0 auto;
        width: 60%;
        text-align: right;
        font-size: 12px;
    }
}

`

export default HomeDetails