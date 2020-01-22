import React from "react"
import { Card, CardTitle, CardText, Row, Col } from "reactstrap"
import Button from "./button"
import FadeInSection from "./fadeInSection"
import styles from "./cardhome.module.scss"

const CardHome = props => {
  switch (props.tipo) {
    case "invierte":
      return (
        <FadeInSection>
          <Row>
            <Col sm="6">
              <Card body className={styles.floatingBlock}>
                <div className="d-flex justify-content-center w-100">
                  <Button color="greenlight" text={props.textbutton} />
                </div>
                <CardTitle>{props.title}</CardTitle>
                <ul>
                  <li>{props.bulletone}</li>
                  <li>{props.bullettwo}</li>
                  <li>{props.bulletthree}</li>
                </ul>
                <CardText>{props.text}</CardText>
              </Card>
            </Col>
          </Row>
        </FadeInSection>
      )
    case "pretamo":
      return (
        <FadeInSection>
          <Row>
            <Col sm="6">
              <Card body className={styles.floatingBlock}>
                <div className="d-flex justify-content-center w-100">
                  <Button color="greenlight" text={props.textbutton} />
                </div>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.text}</CardText>
                <ul>
                  <li>{props.bulletone}</li>
                  <li>{props.bullettwo}</li>
                  <li>{props.bulletthree}</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </FadeInSection>
      )
    case "quarter":
      return (
        <FadeInSection>
          <Col md="3">
            <Card body className={styles.quarterBlock}>
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
                  fill="none"
                />
                <path
                  className={styles.checkmark__check}
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
              <CardText className={styles.quarterBlockText}>
                {props.text}
              </CardText>
            </Card>
          </Col>
        </FadeInSection>
      )
    case "inversionistas":
      return (
        <FadeInSection>
          <Card body className={styles.product} id="cuenta-mx">
            <div className={styles.productName}>
              <span className="product-name-wrapper d-flex flex-column">
                <h4 className={styles.invertittle + " m-0 p-0"}>
                  {props.tittlecard}
                </h4>
                <p className="m-0 p-0">CFL</p>
              </span>
            </div>
            <div className={styles.productRate}>
              <span className={styles.rate}>{props.number}</span>
              <span>% TNA*</span>
            </div>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBar}></div>
              <div className={styles.progressBarCover}></div>
            </div>
            <CardTitle className="text-center font-weight-bold">{props.title}</CardTitle>

            <CardText className={styles.invertext}>
              {props.text} <br /> {props.text2}
            </CardText>
          </Card>
        </FadeInSection>
      )
      case "inversionistastext":
        return (
          <FadeInSection>
            <Card body className={styles.product} id="cuenta-mx">
              <div className={styles.productName}>
                <span className="product-name-wrapper d-flex flex-column">
                  <h4 className={styles.invertittle + " m-0 p-0"}>
                    {props.tittlecard}
                  </h4>
                  <p className="m-0 p-0">CFL</p>
                </span>
              </div>
              <CardTitle className="text-center font-weight-bold py-2">{props.title}</CardTitle>
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBar}></div>
                <div className={styles.progressBarCover}></div>
              </div>
              <CardText className={styles.invertext + " pt-2"}>
                {props.text}
              </CardText>
            </Card>
          </FadeInSection>
        )
    case "ofrecemos":
      return (
        <FadeInSection>
          <Col md="4">
            <Card body className={styles.quarterBlockTwo}>
              <img
                src={props.src}
                alt={props.alt}
                className={styles.imgofrecemos}
              />
              <CardText className={styles.quarterBlockText}>
                {props.text}
                <br />
                {props.text2} <br />
                {props.text3}
              </CardText>
            </Card>
          </Col>
        </FadeInSection>
      )
    default:
      return (
        <FadeInSection>
          <div className="position-relative">
            <img
              src={props.image}
              alt={props.title}
              className="img-fluid w-100"
            />
            <div className={styles.textImage + " position-absolute p-0 d-flex"}>
              <div>
                <p className={"py-2 px-4 m-0"}>
                  {props.title}
                  <br />
                  {props.text}
                </p>
                {props.hideLine ? "" : <div className={styles.greenLine}></div>}
              </div>
            </div>
          </div>
        </FadeInSection>
      )
  }
}

export default CardHome
