import FeaturesDetails from './FeaturesDetails'

export const Features = () => {
    return(
        <FeaturesDetails>
            <div className="firstArea">
                <i className="fas fa-th"></i>
                <h4>UX/UI Design</h4>
                <p>Um website bem desenvolvido é sempre pensado na necessidade do cliente</p>
            </div>
            <div className="secondArea">
                <i className="far fa-lightbulb"></i>
                <h4>Identidade Visual</h4>
                <p>A identidadade da empresa é a conexão entre seu produto e o cliente.</p>
            </div>
            <div className="thirdArea">
                <i className="fas fa-fire-alt"></i>
                <h4>Web Design</h4>
                <p>Website é a principal comunicação entre a empresa e o cliente.</p>
            </div>
            <div className="fourthArea">
                <i className="fab fa-android"></i>
                <h4>Responsividade</h4>
                <p>A ferramenta para se conectar com cliente em vários dispositivos.</p>
            </div>
        </FeaturesDetails>
    )
}

export default Features