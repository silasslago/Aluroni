import classNames from "classnames"
import PlateTags from "components/PlateTags/plate_tags"
import { PropTypes } from "prop-types"
import { useNavigate } from "react-router-dom"
import styles from "./item.module.css"

const Item = (plate) => {
    const { id, title, description, photo } = plate
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/plate/${id}`)} className={classNames({
            "d-flex mb-2 p-3": true,
            [styles.item]: true,
        })}>
            <div className="me-3">
                <img src={photo} alt={title} />
            </div>
            <div className="w-50">
                <div>
                    <h2 className="fw-bold">{title}</h2>
                    <p className="text-secondary">{description}</p>
                </div>
                <PlateTags {...plate} />
            </div>
        </div>
    )
}

Item.propTypes = {
    plate: PropTypes.object,
}

export default Item