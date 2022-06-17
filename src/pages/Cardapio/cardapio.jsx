import React, { useState } from 'react'
import styles from 'pages/Cardapio/cardapio.module.css'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Buscador from './Buscador/buscador.jsx'
import Filtros from './Filtros/filtros.jsx'
import Ordenador from './Ordenador/ordenador.jsx'

const Cardapio = () => {
    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState(0)
    const [order, setOrder] = useState("")
    return (
        <React.Fragment>
            <header>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <Logo />
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <div className={`${styles.apresentation}`}>
                    <div className='container'>
                        <h1 className={`${styles['apresentation-text']} display-1 m-0 w-50`}>
                            Entre a faca e o garfo.
                        </h1>
                    </div>
                </div>
                <section className='container'>
                    <h1 className='display-5'>Cardápio</h1>
                    <Buscador busca={busca} setBusca={setBusca} />
                    <div className='mt-2 d-flex justify-content-between'>
                        <Filtros
                            filtro={filtro}
                            setFiltro={setFiltro}
                        />
                        <Ordenador 
                            order={order}
                            setOrder={setOrder}
                        />
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Cardapio
