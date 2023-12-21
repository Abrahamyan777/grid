import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import WhoWeAre from "../whoWeAre/whoWeAre";
import WhatWeDo from "../whatWeDo/whatWeDo";
import Contact from "../contact/contact";




const Layout = ({footerRef}) => {
    return (
        <>
            <Routes>
                <Route path='/grid/' element={<Main footerRef={footerRef}/>} />
                <Route path="/grid/whoWeAre/" element={<WhoWeAre />}  />
                <Route path="/grid/whatWeDo/" element={<WhatWeDo />}  />
                <Route path="/grid/contactUs/" element={<Contact />}  />
            </Routes>

        </>
    )
}

export default Layout;