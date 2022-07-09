import massa1 from "assets/AboutUs/massa1.jpg"
import massa2 from "assets/AboutUs/massa2.jpg"
import casa from "assets/AboutUs/inside-home.jpg"
import styles from "./about_us.module.css"

const imagens = [massa1, massa2]

const AboutUs = () => {
  return (
    <section className="mt-5">
      <h2 className="display-6 fw-bold">
        Sobre nós
      </h2>
      <div className="d-flex justify-content-center mb-5">
        <div className="me-3">
          <img className={styles.thumbnail} src={casa} alt="Imagem da casa" />
        </div>
        <div>
          <p>
            Nós do Aluroni oferecemos a vocês, 
            nossos queridos clientes, a Massa Italiana 
            Caseira mais saborosa e sofisticada de São Paulo! 
            Prezamos pelos ingredientes tradicionais da culinária 
            Italiana, frescos e de excelente qualidade para que sua 
            experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas 
            opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma 
            reserva de vinhos especiais, que harmonizam perfeitamente 
            com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        {
          imagens.map((imgSource, index) => (
            <div key={index} className="me-3">
              <img className={styles.thumbnail} src={imgSource} alt="Fotografia de massa" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default AboutUs