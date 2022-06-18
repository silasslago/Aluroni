import styles from './itens.module.css'
import data from './itens.json'
import Item from './Item/item'

const Itens = () => {
    return (
        <div>
            {
                data.map(( item ) => (
                    <Item 
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default Itens