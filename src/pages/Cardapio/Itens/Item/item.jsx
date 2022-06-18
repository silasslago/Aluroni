import classNames from 'classnames'
import styles from './item.module.css'

const Item = ({ title, description, photo, size, serving, price, category }) => {
    return (
        <div className='d-flex mb-5'>
            <div className='me-3'>
                <img src={photo} alt={title} />
            </div>
            <div className='w-50'>
                <div>
                    <h2 className='fw-bold'>{title}</h2>
                    <p className='text-secondary'>{description}</p>
                </div>
                <div className='row fw-bold'>
                    <span className={classNames({
                        'col-12': true,
                        'col-md-3': true,
                        [styles['item-category']]: true,
                        [styles[`item-category-${category.label.toLowerCase()}`]]: true
                    })}>{category.label}</span>
                    <span className='col-3 col-md-3'>{size}g</span>
                    <span className='col-12 col-md-3'>Serve {serving} pessoa{serving === 1 ? '' : 's'}</span>
                    <span className={classNames({
                        'text-danger': true,
                        'col-12': true,
                        'col-md-3': true,
                        [styles.price]: true
                    })}>
                        R${String(price.toFixed(2)).replace('.', ',')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Item