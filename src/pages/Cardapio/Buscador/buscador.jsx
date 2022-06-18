import { CgSearch } from 'react-icons/cg'
import styles from './buscador.module.css'

const Buscador = ({ busca, setBusca }) => {
    return (
        <div className={styles['search-div']}>
            <input
                className={styles['search-input']}
                placeholder="Buscar..."
                type="text"
                value={busca} 
                onChange={(event) => setBusca(event.target.value)}
            />
            <CgSearch />
        </div>
    )
}

export default Buscador