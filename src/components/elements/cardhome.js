import React from "react"
import { Card, CardTitle, CardText, Row, Col } from "reactstrap"
import Button from "./button"
import FadeInSection from './fadeInSection'
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
                <CardText className={styles.quarterBlockText}>{props.text}</CardText>
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
