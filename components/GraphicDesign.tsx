import GraphicDesignDetails from '../components/GraphicDesignDetails'

export const GraphicDesign = () => {
    return (
        <GraphicDesignDetails>
            <h2 id="portfolio">Portfólio Gráfico</h2>

            <div className="content">
                <a href="https://www.behance.net/gallery/76744855/Ravenclaw-eSports-v2" target="_blank"><img src="/assets/1.jpg" className="1"/></a>
                <a href="https://www.behance.net/gallery/51235261/Zalfor-Loja-de-Roupas" target="_blank"><img src="/assets/2.jpg" className="2"/></a>
                <a href="https://www.behance.net/gallery/115924363/Santa-F-Barbecue" target="_blank"><img src="/assets/3.jpg" className="3"/></a>
                <a href="https://www.behance.net/gallery/78015707/Clube-Desportivo-Zero19" target="_blank"><img src="/assets/4.jpg" className="4"/></a>
                <a href="https://www.behance.net/gallery/90973751/Maicon-Queiroz-Centro-de-Treinamento" target="_blank"><img src="/assets/5.jpg" className="5"/></a>
                <a href="https://www.behance.net/gallery/92165533/JG-Burger-Cardapio" target="_blank"><img src="/assets/6.jpg" className="6"/></a>
            </div>
        </GraphicDesignDetails>
    )
}

export default GraphicDesign