import classNames from "classnames"
import styles from "./plate_tags.module.css"
import { PropTypes } from "prop-types"

const PlateTags = ({ category, size, serving, price }) => {
    return (
        <div className='row fw-bold'>
            <span className={classNames({
                "col-12": true,
                "col-md-3": true,
                [styles["item-category"]]: true,
                [styles[`item-category-${category.label.toLowerCase()}`]]: true
            })}>{category.label}</span>
            <span className='col-3 col-md-3'>{size}g</span>
            <span className='col-12 col-md-3'>Serve {serving} pessoa{serving === 1 ? "" : "s"}</span>
            <span className={classNames({
                "text-danger": true,
                "col-12": true,
                "col-md-3": true,
                [styles.price]: true
            })}>
                R${String(price.toFixed(2)).replace(".", ",")}
            </span>
        </div>
    )
}

PlateTags.propTypes = {
    category: PropTypes.string,
    size: PropTypes.number,
    serving: PropTypes.number,
    price: PropTypes.number,
}

export default PlateTags