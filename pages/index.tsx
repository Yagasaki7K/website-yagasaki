import NavMenu from '../components/NavMenu'
import IndexDetails from '../components/IndexDetails'
import HiAnderson from '../components/HiAnderson'
import IntroduceMe from '../components/IntroduceMe'
import Features from '../components/Features'
import BlogHome from '../components/BlogHome'
import GraphicDesign from '../components/GraphicDesign'
import ContactMe from '../components/ContactMe'

export const Index = () => {
    return(
        <>
            <head>
                <title>Anderson Marlon // Dev {"&"} Design</title>
            </head>
            <IndexDetails>
                <NavMenu/>
                <HiAnderson/>
                <IntroduceMe/>
                <Features/>
                <GraphicDesign/>
                <BlogHome/>
                <ContactMe/>
            </IndexDetails>
        </>
    )
}

export default Index