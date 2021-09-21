import NavMenu from '../components/NavMenu'
import IndexDetails from '../components/IndexDetails'
import HiAnderson from '../components/HiAnderson'
import IntroduceMe from '../components/IntroduceMe'
import Features from '../components/Features'

export const Index = () => {
    return(
        <>
            <head>
                <title>Anderson Marlon // Dev & Design</title>
            </head>
            <IndexDetails>
                <NavMenu/>
                <HiAnderson/>
                <IntroduceMe/>
                <Features/>
            </IndexDetails>
        </>
    )
}

export default Index