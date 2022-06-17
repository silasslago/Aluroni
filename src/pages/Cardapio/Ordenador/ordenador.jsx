import styles from './ordenador.module.css'
import ordenador from './ordenador.json'
import classNames from 'classnames'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Ordenador = ({ order, setOrder }) => {

    const [pressed, setPressed] = useState(false)
    const orderName = order && ordenador.find(ordem => ordem.value === order).nome

    return (
        <button
            onClick={() => setPressed(!pressed)} 
            onBlur={() => setPressed(false)}
            className={`ps-0 pe-0 p-3 pt-0 text-start ${classNames(
            {
                [styles['new-select']]: true,
                [styles['new-select-pressed']]: pressed,
                [styles['new-select-ordered']]: order,
            }
        )}`}>
            <div className={`d-flex align-items-center justify-content-between ms-4 ${styles['span-size']}`}>
                <p className='m-0'>
                    { orderName || "Ordenar por..." }
                </p>
                { 
                    pressed ? 
                        <MdKeyboardArrowUp size={20} 
                            className="me-3"
                        /> 
                    : 
                        <MdKeyboardArrowDown size={20} 
                            className="me-3"
                        /> 
                }
            </div>
            <div>
                {
                    ordenador.map(({ nome, value }) => (
                        <div 
                            key={value} 
                            onClick={() => setOrder(value)}
                            className={`d-flex align-items-center ${styles['order-button']}`} 
                        >
                            <p className='m-0 ms-4'>
                                { nome }
                            </p>
                        </div>
                    ))
                }
            </div>
        </button>
    )
}

export default Ordenador