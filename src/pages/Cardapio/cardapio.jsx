import React, { useState } from "react"
import Buscador from "./Buscador/buscador.jsx"
import Filtros from "./Filtros/filtros.jsx"
import Ordenador from "./Ordenador/ordenador.jsx"
import Itens from "./Itens/itens.jsx"
import "./cardapio.module.css"

const Cardapio = () => {
	const [busca, setBusca] = useState("")
	const [filtro, setFiltro] = useState(0)
	const [order, setOrder] = useState("")
	return (
		<section className='container'>
			<h1 className='display-5'>Cardápio</h1>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className='mt-2 d-block d-md-flex justify-content-between'>
				<div className='mb-3'>
					<Filtros
						filtro={filtro}
						setFiltro={setFiltro}
					/>
				</div>
				<div>
					<Ordenador 
						order={order}
						setOrder={setOrder}
					/>
				</div>
			</div>
			<div className='mt-5'>
				<Itens
					busca={busca}
					filtro={filtro}
					order={order}
				/>
			</div>
		</section>
	)
}

export default Cardapio
