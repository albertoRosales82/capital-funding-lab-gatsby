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

function routing() {
  return (
    <div id="app-content">
      <Router>
        <Layout>
          <section id="hero" className="block">
            <div id="hero-vid">
              <ReactPlayer
                url="/video/background-mexico-skyline.mp4"
                playing
                className={styles.video}
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
          {/**The end of the block div */}
          <div className="block">
            <div>
              <div id="home-block1-text">
                <div className="center">
                  <h2>EL COMPROMISO CFL</h2>
                </div>
                <div className="quarter-block">
                  <svg
                    className={styles.checkmark}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className={styles.checkmark__circle}
                      cx="26"
                      cy="26"
                      r="25"
                      fill="rgb(26,114,114)"
                    />
                    <path
                      className={styles.checkmark__check}
                      fill="rgb(26,114,114)"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>

                  <div className="quarter-block-text">
                    Diseñado para ser seguro, fácil de usar y justo{" "}
                  </div>
                </div>
                <div className="quarter-block">
                  <svg
                    class="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      class="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      class="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>

                  <div className="quarter-block-text">
                    Nos proponemos ser transparentes y mantener bajos costes{" "}
                  </div>
                </div>
                <div className="quarter-block">
                  <svg
                    class="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      class="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      class="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                  <div className="quarter-block-text">
                    Creamos un portafolio diversificado de préstamos para ti{" "}
                  </div>
                </div>
                <div className="quarter-block">
                  <svg
                    class="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      class="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      class="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                  <div className="quarter-block-text">
                    Invierte para la oportunidad de ganar interés sobre sus
                    ahorros.{" "}
                  </div>
                </div>
                <div></div>
                <a
                  href="https://registration.capitalfundinglabs.com/account/register?type=lender"
                  className="button button-clear"
                  onClick="trackClick('HAZTE CLIENTE button')"
                >
                  &nbsp;HAZTE CLIENTE 〉
                </a>
              </div>
            </div>
          </div>
          {/**product-content-area */}
          <div
            className="content-area"
            id="product-content-area"
            style={{ backgroundColor: "rgb(31,79,92)" }}
          >
            <div id="product-grid">
              <h2
                style={{
                  color: "white",
                  display: "block",
                  width: "100%",
                  textTransform: "none",
                  marginTop: "0",
                  marginBottom: "70px",
                }}
              >
                ¿Que ofrecemos a nuestros inversionistas?
              </h2>

              <div className="product" id="cuenta-mx">
                <div className="product-name">
                  <span className="product-name-wrapper">
                    <span>Cuenta</span>CFL
                  </span>
                </div>
                <div className="product-rate" style={{ position: "relative" }}>
                  <span className="rate">2.5</span>
                  <span style={{ position: "absolute", bottom: "16px" }}>
                    % TNA*
                  </span>
                </div>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar"></div>
                  <div className="progress-bar-cover"></div>
                </div>
                <div className="product-description">TNA </div>
                <div
                  style={{
                    fontStyle: "italic",
                    marginTop: "20px",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  Sin plazo mínimo.
                  <br />
                  La inversión se reinvierte de forma automática para maximizar
                  su retorno.
                </div>
              </div>

              <div className="product" id="uno-mx">
                <div className="product-name">
                  <span className="product-name-wrapper">
                    <span>Uno</span>CFL
                  </span>
                </div>
                <div className="product-rate" style={{ position: "relative" }}>
                  <span className="rate">3.5</span>
                  <span style={{ position: "absolute", bottom: "16px" }}>
                    % TNA*
                  </span>
                </div>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar"></div>
                  <div className="progress-bar-cover"></div>
                </div>
                <div className="product-description"></div>
                <div
                  style={{
                    fontStyle: "italic",
                    marginTop: "20px",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  Plazo de 1 año
                  <br />
                  La inversión se reinvierte de forma automática para maximizar
                  su retorno{" "}
                </div>
              </div>

              <div className="product" id="product-uk">
                <div className="product-name">
                  <span className="product-name-wrapper">
                    <span>Mercado</span>CFL
                  </span>
                </div>
                <div className="product-rate" style={{ position: "relative" }}>
                  <span className="rate">6.0</span>
                  <span style={{ position: "absolute", bottom: "16px" }}>
                    % TNA*
                  </span>
                </div>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar"></div>
                  <div className="progress-bar-cover"></div>
                </div>
                <div className="product-description"></div>
                <div
                  style={{
                    fontStyle: "italic",
                    marginTop: "20px",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  Plazo de 3 años.
                  <br />
                  La inversión se reinvierte de forma automática para maximizar
                  su retorno.
                </div>
              </div>

              <div className="center product" id="product-end-talk">
                <div
                  className="product-name"
                  style={{
                    width: "100%",
                    display: "inline-block",
                    marginTop: "3px",
                  }}
                >
                  <span className="product-name-wrapper">
                    ¿Te gustaría conocer más?
                  </span>
                </div>
                <div
                  className="product-rate"
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    padding: "10px 10px",
                    marginTop: "23px",
                    height: "120px",
                  }}
                >
                  Un profesional de CFL estará encantado de responder cualquier
                  pregunta que pueda tener sobre nuestras ofertas y productos.
                </div>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar"></div>
                  <div className="progress-bar-cover"></div>
                </div>
                <div
                  className="product-description"
                  style={{ fontSize: "16px", textAlign: "left" }}
                >
                  <b>Email:</b> info@capitalfundinglab.com{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div>
              <div id="home-block1-text">
                <div className="center">
                  <h2 style={{ textTransform: "none" }}>
                    ¿Qué ofrecemos a nuestros solicitantes?
                  </h2>
                </div>
                <div className="quarter-block">
                  <img
                    src="/images/money.png"
                    alt="money"
                    width="60"
                    height="60"
                  />
                  <div className="quarter-block-text">
                    Liquidez
                    <br />
                    50,000 UDIs
                    <br />
                    Plazo de 12-120 meses
                  </div>
                </div>
                <div className="quarter-block">
                  <img
                    src="/images/industry.png"
                    alt="industry"
                    width="60"
                    height="60"
                  />
                  <div className="quarter-block-text">
                    Liquidez empresas
                    <br />
                    1,670,000 UDIs
                    <br />
                    Plazo de 12-120 meses
                  </div>
                </div>
                <div className="quarter-block">
                  <img
                    src="/images/home.png"
                    alt="home"
                    width="60"
                    height="60"
                  />
                  <div className="quarter-block-text">
                    Hogar
                    <br />
                    50,000 UDIs
                    <br />
                    Plazo de 12-240 meses
                  </div>
                </div>
              </div>
            </div>
          </div>
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
