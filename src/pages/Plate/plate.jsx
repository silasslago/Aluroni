import { useParams, useLocation } from "react-router-dom" 

const Plate = () => {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    return (
        <section className="mt-5 mb-5">
            Prato { params.id }
            <br/>
            <img src={location.state.photo} alt="Imagem de prato" />
        </section>
    )
}

export default Plate