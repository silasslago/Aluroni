import classNames from "classnames"
import styles from "./home.module.css"
import cardapioData from "data/cardapio.json"

const Home = () => {

	const randomDish = cardapioData.sort(() => 0.5 - Math.random()).slice(0, 3)

	return (
		<section className="container mt-5">
			<h2 className={classNames({
				"display-6": true,
				"text-center": true,
				[styles["home-title"]]: true,
				"fw-bold": true,
			})}>
				Recomendações da cozinha
			</h2>
			<div className={classNames({
				[styles["box-body"]]: true,
				"row": true,
				"justify-content-center": true,
				"d-flex": true,
			})}>
				{
					randomDish.map((item) => (
						<div
							key={item.id}
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
								"mt-2": true,
								"btn": true,
								"btn-danger": true,
							})}>
								Ver mais
							</button>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Home
