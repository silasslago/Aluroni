import classNames from "classnames"
import styles from "./home.module.css"
import cardapioData from "data/cardapio.json"
import aluroniInside from "assets/aluroni-dentro.jpg"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const randomDish = cardapioData.sort(() => 0.5 - Math.random()).slice(0, 3)
    const navigate = useNavigate()

    const showMoreDetails = (plate) => {
        navigate(`/plate/${plate.id}`)
    }

    return (
        <section className=" mt-5">
            <h2 className={classNames({
                "display-6 text-center fw-bold": true,
                [styles["home-title"]]: true,
            })}>
				Recomendações da cozinha
            </h2>
            <section className={classNames({
                [styles["box-body"]]: true,
                "row d-flex justify-content-center": true,
            })}>
                {
                    randomDish.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => showMoreDetails(item)}
                            className={classNames({
                                "d-flex": true,
                                "flex-column": true,
                                "col-12": true,
                                "col-sm-4": true,
                                "col-md-3": true,
                                "mb-5": true,
                            })}
                        >
                            <img 
                                src={item.photo}
                                alt={item.description}	
                            />
                            <button className={classNames({
                                "btn btn-danger mt-2": true,
                            })}>
								Ver mais
                            </button>
                        </div>
                    ))
                }
            </section>
            <section>
                <h2 className="fw-bold">Nossa casa</h2>
                <div>
                    <img 
                        src={aluroniInside} 
                        alt="Imagem do restaurante aluroni" 
                        className={styles.house} 
                    />
                </div>
                <div className={styles.adress}>
                    Rua Rudolvado Oliveira, N 44 <br/> FSA - BA
                </div>
            </section>
        </section>
    )
}

export default Home
