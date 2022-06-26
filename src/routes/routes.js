import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "pages/Home/home"
import Cardapio from "pages/Cardapio/cardapio"
import Header from "components/Header/header"
import MainJumbotron from "components/MainJumbotron/main_jumbotron"

const CurRoute = () => {
	return (
		<main>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={ <MainJumbotron/> }>
						<Route index element={ <Home /> } />
						<Route path="cardapio" element={ <Cardapio /> } />
					</Route>
				</Routes>
			</Router>
		</main>
	)
}

export default CurRoute