import { ReactComponent as NotFoundSvg } from "assets/not_found.svg"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <section className="container mb-5 mt-5">
            <button className="btn btn-danger" onClick={() => navigate(-1)}>
                &lt;- Voltar
            </button>
            <div className="d-flex justify-content-center">
                <NotFoundSvg />
            </div>
        </section>    
    )
}

export default NotFound