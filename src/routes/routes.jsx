import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "components/Header/header"
import MainJumbotron from "components/MainJumbotron/main_jumbotron"
import Footer from "components/Footer/footer"
import { lazy, Suspense } from "react"

const Plate = lazy(() => import("pages/Plate/plate"))
const NotFound = lazy(() => import("pages/NotFound/not_found"))
const AboutUs = lazy(() => import("pages/AboutUs/about_us"))
const Cardapio = lazy(() => import("pages/Cardapio/cardapio"))
const Home = lazy(() => import("pages/Home/home"))

const CurRoute = () => {
    return (
        <main>
            <Router>
                <Header />
                <Suspense fallback={<p>
                    Carregando...
                </p>}>
                    <Routes>
                        <Route path="/" element={<MainJumbotron/>}>
                            <Route index element={<Home/>}/>
                            <Route path="cardapio" element={<Cardapio/>}/>
                            <Route path="aboutus" element={<AboutUs/>}/>
                        </Route>
                        <Route path="/plate/:id" element={<Plate/>} />
                        <Route path="/*" element={<NotFound/>} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </main>
    )
}

export default CurRoute