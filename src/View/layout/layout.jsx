import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import WhoWeAre from "../whoWeAre/whoWeAre";
import WhatWeDo from "../whatWeDo/whatWeDo";
import Contact from "../contact/contact";




const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path="/whoWeAre" element={<WhoWeAre />}  />
                <Route path="/whatWeDo" element={<WhatWeDo />}  />
                <Route path="/contactUs" element={<Contact />}  />
            </Routes>

        </>
    )
}

export default Layout;