import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Row, Col } from "reactstrap"
import ReactPlayer from "react-player"
import CardHome from "./../components/elements/cardhome"
import styles from "./index.module.scss"
import "../styles/general.scss"
import "./home.scss"
import "./invest.scss"
import "./requirements.scss"
import Calculator from "./calculator"
import Invest from "./investmen"
import Layout from "./../components/layout/layout"
import FadeInSection from "./../components/elements/fadeInSection"
import Button from "./../components/elements/button"

function routing() {
  return (
    <div id="app-content">
      <Router>
        <Layout>
          <section id="hero" className="block">
            <div id="hero-vid">
              <ReactPlayer
                className={styles.video}
                url="/video/background-mexico-skyline.mp4"
                playing
              />
            </div>
            <FadeInSection>
              <div id="hero-content" className="container my-0 my-4">
                <h1
                  className={styles.headertittle + " depth mx-auto text-center"}
                >
                  Invierte en préstamos con garantías reales
                </h1>
                <h2 className={styles.headersubtittle + " mx-auto text-center"}>
                  Intereses a partir de 2.5% TNA<small>*</small>
                </h2>
                <div className="container p-lg-5 p-0 ">
                  <p className="mx-auto text-center">
                    Capital Funding Lab es una Institución de Financiamiento
                    Colectivo con presencia en México que realiza préstamos a
                    clientes selectos.
                  </p>
                  <p className="mx-auto text-center">
                    * Su capital está en riesgo y no está protegido por ningún
                    esquema de compensación gubernamental de servicios
                    financieros.
                  </p>
                </div>
              </div>
            </FadeInSection>
            <Row className="">
              <Col lg="6 " className=" d-flex justify-content-center py-auto">
                <CardHome
                  textbutton="INVIERTE TU DINERO"
                  tittle="Elige tu producto"
                  bulletone="Registro Sencillo"
                  bullettwo="Diversificado para reducir
                    riesgo*"
                  bulletthree="Altos requisitos para
                    solicitantes"
                  text="*Su capital no está protegido por ningún esquema
                    gobernamental de compensación de servicios financieros."
                  tipo="invierte"
                />
              </Col>
              <Col lg="6 " className=" d-flex justify-content-center py-auto">
                <CardHome
                  textbutton="PEDIR UN PRÉSTAMO"
                  tittle="Préstamos personales con garantías reales"
                  bulletone="Rápidos"
                  bullettwo="Flexibles"
                  bulletthree="Justos"
                  text="Nuestros préstamos están diseñados para ser:"
                  tipo="pretamo"
                />
              </Col>
            </Row>
          </section>

          <section>
            <div className="d-flex justify-content-center py-4">
              <h2 className={styles.subtittle + " mx-auto text-center"}>
                EL COMPROMISO CFL
              </h2>
            </div>
            <div className="container d-flex">
              <Row>
                <CardHome
                  tipo="quarter"
                  text="Diseñado para ser seguro, fácil de usar y justo."
                />
                <CardHome
                  tipo="quarter"
                  text="Nos proponemos ser transparentes y mantener bajos costes."
                />
                <CardHome
                  tipo="quarter"
                  text="Invierte para la oportunidad de ganar interés sobre sus
                    ahorros."
                />
                <CardHome
                  tipo="quarter"
                  text="Creamos un portafolio diversificado de préstamos para ti."
                />
              </Row>
            </div>
            <div className="d-flex justify-content-center py-4">
              <Button
                color="grey"
                text="HAZTE CLIENTE 〉"
                url="https://registration.capitalfundinglabs.com/account/register?type=lender"
              />
            </div>
          </section>
          <section>
            <div
              className="content-area py-4"
              id="product-content-area"
              style={{ backgroundColor: "rgb(31,79,92)" }}
            >
              <div id="product-grid">
                <h2 className={styles.subtittleWhite}>
                  ¿Que ofrecemos a nuestros inversionistas?
                </h2>
              </div>
              <div className="container-fluid d-flex justify-content-center py-4">
                <CardHome
                  tipo="inversionistas"
                  tittlecard="Cuenta"
                  number="2.5"
                  title="TNA"
                  text="Sin plazo mínimo."
                  text2="La inversión se reinvierte de forma automática para maximizar
                  su retorno."
                />
                <CardHome
                  tipo="inversionistas"
                  tittlecard="Uno"
                  number="3.5"
                  title="TNA"
                  text="Plazo de 1 año."
                  text2="La inversión se reinvierte de forma automática para maximizar
                  su retorno."
                />
                <CardHome
                  tipo="inversionistas"
                  tittlecard="Mercado"
                  number="6.0"
                  title="TNA"
                  text="Plazo de 3 años."
                  text2="La inversión se reinvierte de forma automática para maximizar
                  su retorno."
                />
                <CardHome
                  tipo="inversionistastext"
                  tittlecard="¿Te gustaría conocer más?"
                  title="Email: info@capitalfundinglab.com"
                  text="Un profesional de CFL estará encantado de responder cualquier
                  pregunta que pueda tener sobre nuestras ofertas y productos."
                />
              </div>
            </div>
          </section>
          {/**product-content-area */}
          <section>
            <div className="d-flex justify-content-center py-4">
              <h2 className={styles.subtittle + " mx-auto text-center"}>
                ¿Qué ofrecemos a nuestros solicitantes?
              </h2>
            </div>
            <div className="container d-flex justify-content-center mx-auto py-4">
              <Row clasName={styles.sectionthree}>
                <CardHome
                  tipo="ofrecemos"
                  src="/images/money.png"
                  alt="money"
                  text="Liquidez"
                  text2="50,000 UDIs"
                  text3="Plazo de 12-120 meses"
                />
                <CardHome
                  tipo="ofrecemos"
                  src="/images/industry.png"
                  alt="industry"
                  text="Liquidez empresas"
                  text2="1,670,000 UDIs"
                  text3="Plazo de 12-120 meses"
                />
                <CardHome
                  tipo="ofrecemos"
                  src="/images/home.png"
                  alt="home"
                  text="Hogar"
                  text2="50,000 UDIs"
                  text3="Plazo de 12-240 meses"
                />
              </Row>
            </div>
          </section>

          <div className="flex-container">
            <div className="column1 tableShadow">
              <h4 className="fix-h4 media-heading semi-bold">
                Requisitos para solicitante
              </h4>
              <ul className="imagechk">
                <li>Ser mexicano, con residencia permanente en el país.</li>
                <li>Mayor de 18 años.</li>
                <li>Ingreso mensual neto de $6,250</li>
                <li>Tener cuenta en un banco, e-mail y celular.</li>
              </ul>
            </div>
            <div className="column2 tableShadow">
              <h4 className="fix-h4 media-heading semi-bold">&nbsp;</h4>
              <div className="example-row">
                <div className="col1">Prestamos Otorgados:</div>
                <div className="col2">0</div>
              </div>
              <div className="example-row">
                <div className="col1">Intereses Generados:</div>
                <div className="col2">0</div>
              </div>
              <div className="example-row">
                <div className="col1">Monto Prestado:</div>
                <div className="col2">0</div>
              </div>
              <div className="example-row">
                <div className="col1">Miembros de la comunidad:</div>
                <div className="col2">0</div>
              </div>
            </div>
          </div>
          <Calculator />
          <div
            className="content-area"
            id="product-content-area"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <span
              className="small-print"
              style={{
                fontSize: "17px",
                textAlign: "center",
                width: "100%",
                display: "block",
              }}
            >
              El resultado de "Calcula tu crédito", se basa exclusivamente en la
              información crediticia que incorporaste en el formulario. Te
              informaremos la tasa de interés del préstamo y el valor de cuota
              promedio que te podamos ofrecer una vez que finalices la Solicitud
              de Crédito, aclarando que podrán ser diferentes del resultado de
              "Calcula tu crédito".
            </span>
          </div>
          <Invest />
          <div
            className="content-area"
            id="product-content-area"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <span
              className="small-print"
              style={{
                fontSize: "17px",
                textAlign: "center",
                width: "100%",
                display: "block",
              }}
            >
              El resultado de "Calcula tu inversión", es un estimado que se basa
              exclusivamente en la información que incorporaste en el
              formulario. Tu capital está en riesgo y no está protegido por
              ningún esquema de compensación gubernamental de servicios
              financieros
            </span>
          </div>
          <div className="block">
            <div className="tryitnow center">
              <div className="head">¡Comienza en CFL ahora!</div>
              <div className="text">Registrarse lleva solo unos minutos</div>
              <a
                href="https://registration.capitalfundinglabs.com/account/register"
                className="button"
                onClick="trackClick('COMIENZA HOY button 2')"
              >
                COMIENZA HOY
              </a>
            </div>
          </div>
        </Layout>
      </Router>
    </div>
  )
}

export default routing

//ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
