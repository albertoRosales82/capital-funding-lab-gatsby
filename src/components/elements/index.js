import React from "react"
import Layout from "../components/layout/layout"
import styles from "./index.module.scss"
import InputButton from "./../components/elements/inputButton"
import Button from "../components/elements/button"
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"

export default () => (
  <Layout active="HOME">
    <section
      className={
        styles.sectionhome + " d-flex justify-content-center align-items-center"
      }
    >
      <Row className="p-0 m-0 mt-5 pt-4 w-100">
        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-5"}>
            <h2
              className={
                styles.generalTextTitleDark +
                " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
              Marketplace for investing in loans.
            </h2>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-75 text-center mx-auto"
              }
            >
              Invest in loans and potentially start earning passive income.{" "}
              <br />
              Connect with opportunities on our marketplace.
            </p>
            <div
              className={
                styles.sendInfo + " d-flex justify-content-center pb-1"
              }
            >
              <InputButton
                svg="/images/icons/arrow-right.svg"
                alt="Arrow Right"
              />
            </div>
            <div
              className={
                styles.textSmall + " d-flex justify-content-center pb-5"
              }
            >
              <p>
                Investing your money puts your capital at risk.
                <Link to="risk">Learn more about risks</Link>
              </p>
            </div>
          </div>
        </Col>
        <Col md="6" className="p-0 m-0">
          <div className={styles.containerGif + " d-none d-lg-block p-0 m-0"}>
            <img
              src="/images/phone-card.png"
              alt="Gif card"
              className={styles.gifhome + " "}
            />
          </div>
          {/* <div className={styles.containerGif + " d-lg-none d-block p-0 m-0"}>
          <img
              src="/images/adios-comisiones.png"
              alt="Gif card"
              className={styles.gifhome + " "}
            />
          </div> */}
        </Col>
      </Row>
    </section>
    <section className={styles.sectionblue}>
      <Row className="p-0 m-0">
        <Col
          xs="12"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto"}>
            <h2
              className={
                styles.generalTextTitleGreen +
                " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
              Loan marketplace
            </h2>
          </div>
        </Col>

        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className={styles.iconcontainer + " container my-auto "}>
            <img src="/images/icons/wallet.png" alt="Card" className="w-100 my-3" />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h2
              className={
                styles.generalTextGreen +
                " pb-3 pt-1 w-75 text-center mx-auto text-bold"
              }
            >
              Legally compliant
            </h2>
            <p
              className={
                styles.generalTextGreen + " pb-3 pt-1 w-75 text-center mx-auto"
              }
            >
              We apply the EU standards to each of our Clients in relation to
              their investor profile (KYC) and Anti-Money Laundering prevention
              laws.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className={styles.iconcontainer + " container my-auto "}>
            <img src="/images/icons/security.png" alt="Card" className="w-100 my-3" />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h2
              className={
                styles.generalTextGreen +
                " pb-3 pt-1 w-75 text-center mx-auto text-bold"
              }
            >
              Multi-level profile protection
            </h2>
            <p
              className={
                styles.generalTextGreen + " pb-3 pt-1 w-75 text-center mx-auto"
              }
            >
              In order to access your profile, you will be requested a second factor of authentication.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className={styles.iconcontainer + " container my-auto "}>
            <img src="/images/icons/notifications.png" alt="Card" className="w-100 my-3" />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h2
              className={
                styles.generalTextGreen +
                " pb-3 pt-1 w-75 text-center mx-auto text-bold"
              }
            >
              Notifications
            </h2>
            <p
              className={
                styles.generalTextGreen + " pb-3 pt-1 w-75 text-center mx-auto"
              }
            >
              Consult your profile to see information on your investments,
              earnings, or other transactions.
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section>

    </section>
    <section id="contacto" className="px-4">
      <div className={styles.formdiv + " container my-4"}>
        <h2
          className={
            styles.generalText + " pb-3 pt-1 w-75 text-center mx-auto text-bold"
          }
        >
          ¿Te interesa?
        </h2>
        <p
          className={styles.generalText + " pb-3 pt-1 w-75 text-center mx-auto"}
        >
          Estás a tan sólo unos pasos de obtener tu Tarjeta Iban Mastercard.{" "}
          <br />
          Déjanos tus datos y únete a la lista de espera. Ejecutivo Iban se
          pondrá en contacto contigo a la brevedad.
        </p>
      </div>
    </section>
  </Layout>
)
