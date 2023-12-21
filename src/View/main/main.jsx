import HomePage from "../homePage/homePage"
import Info from "../info/info"
import Price from "../price/price"


const Main = ({footerRef}) => {
    return (
        <>
            <HomePage  footerRef={footerRef}/>
            <Info />
            <Price footerRef={footerRef}/>
        </>
    )
}

export default Main;