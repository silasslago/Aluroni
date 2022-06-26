import styles from "./main_jumbotron.module.css"
import { Outlet } from "react-router-dom"

const MainJumbotron = () => {
	return (
		<div>
			<div className={`${styles.apresentation}`}>
				<div className='container'>
					<h1 className={`${styles["apresentation-text"]} display-1 m-0 w-50`}>
						Entre a faca e o garfo.
					</h1>
				</div>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	)
}

export default MainJumbotron