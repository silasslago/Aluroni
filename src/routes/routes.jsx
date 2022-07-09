import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "pages/Home/home"
import Cardapio from "pages/Cardapio/cardapio"
import Header from "components/Header/header"
import MainJumbotron from "components/MainJumbotron/main_jumbotron"
import AboutUs from "pages/AboutUs/about_us"
import Footer from "components/Footer/footer"
import NotFound from "pages/NotFound/not_found"
import Plate from "pages/Plate/plate"

const CurRoute = () => {
    return (
        <main>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<MainJumbotron/>}>
                        <Route index element={<Home/>}/>
                        <Route path="cardapio" element={<Cardapio/>}/>
                        <Route path="aboutus" element={<AboutUs/>}/>
                    </Route>
                    <Route path="/plate/:id" element={<Plate/>} />
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
                <Footer />
            </Router>
        </main>
    )
}

export default CurRoute