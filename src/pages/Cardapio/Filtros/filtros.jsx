import filtros from './filtros.json'
import styles from './filtros.module.css'
import classNames from 'classnames'

const Filtros = ({ filtro, setFiltro }) => {

    const selectFilter = (filter) => {
        setFiltro(filter.id)
    }

    return (
        <div>
            {
                filtros.map((filter) => (
                    <button 
                        key={filter.id}
                        className={`me-2 btn ${classNames({
                            [styles['btn-filters-gray']]: true,
                            [styles['btn-filter-selected']]: filter.id === filtro,
                        })}`}
                        onClick={() => selectFilter(filter)}
                    >
                        { filter.label }
                    </button>
                ))
            }
        </div>
    )
}

export default Filtros