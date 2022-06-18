import styles from './itens.module.css'
import data from './itens.json'
import Item from './Item/item'
import { useState } from 'react'
import { useEffect } from 'react'

const Itens = ({ busca, filtro, order }) => {

    const [filteredData, setFilteredData] = useState(data)

    const searchMatchs = (item) => {
        let regex = new RegExp(busca, 'i')
        return regex.test(item.title)
    }

    const filterCategory = (item) => {
        if(filtro===0) return true
        return filtro===item.category.id
    }

    const sortData = (dataList) => {
        switch(order) {
            case 'preco':
                return dataList.sort((a, b) => a.price > b.price ? 1 : -1)
            case 'qtd_pessoas':
                return dataList.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'peso':
                return dataList.sort((a, b) => a.size > b.size ? 1 : -1)
            default:
                return dataList
        }
    }

    useEffect(() => {
        const newFilteredDataList = data.filter((item) => searchMatchs(item) && filterCategory(item))
        setFilteredData(sortData(newFilteredDataList))
    }, [busca, filtro, order])

    return (
        <div>
            {
                filteredData.map(( item ) => (
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