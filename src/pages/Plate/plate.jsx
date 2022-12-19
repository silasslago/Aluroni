import { useParams, useNavigate, Routes, Route } from "react-router-dom" 
import cardapio from "data/cardapio.json"
import styles from "./plate.module.css"
import { lazy } from "react"

const NotFound = lazy(() => import("pages/NotFound/not_found"))
const PlateTags = lazy(() => import("components/PlateTags/plate_tags"))
const MainJumbotron = lazy(() => import("components/MainJumbotron/main_jumbotron"))

const Plate = () => {
  
  const { id } = useParams()
  const navigate = useNavigate()
  const plate = cardapio.find((curPlate) => curPlate.id === Number(id))
  if(!plate) return <NotFound />

  return (
    <Routes>
      <Route path="*" element={<MainJumbotron />}>
        <Route index element={
          <>
            <section className="mt-5 mb-5">
              <button onClick={() => navigate(-1)} className="btn btn-danger">
                &lt;- Voltar
              </button>
              <div className="d-flex flex-column align-items-center justify-content-center mt-3">
                <h2 className="fw-bold">
                  { plate.title }
                </h2>
                <img src={plate.photo} alt={plate.title} className={styles.photo} />
                <p className="mt-2">{plate.description}</p>
                <PlateTags {...plate} />
              </div>
            </section>
          </>
        }/>  
      </Route>
    </Routes>
  )
}

export default Plate