import filtros from './filtros.json'
import styles from './filtros.module.css'

const Filtros = () => {

    const selectFilter = (filter) => {
        console.log(filter)
    }

    return (
        <div>
            {
                filtros.map((filter) => (
                    <button 
                        key={filter.id}
                        className={`${styles['btn-filters-gray']} btn me-2`}
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