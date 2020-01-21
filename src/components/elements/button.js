import React from "react"
import styles from "./button.module.scss"
import { Link } from "gatsby"
import { Button as ButtonReacstrap } from "reactstrap"
import Ripples from "react-ripples"

const Button = props => {
  return (
    <div>
      <Ripples>
      {
                    props.url ?
                      props.svg ?
                        <Link state={props.state} className={ props.disabled ? styles.disabled + ' ' + styles[props.color] + ' ' + styles.button : styles[props.color] + ' ' + styles.button + ' ' + 'd-flex'} to={props.url}>
                            {props.text}
                            <div className="ml-2">
                            <img src={props.svg} alt={props.alt} />
                            </div>
                        </Link>
                      :
                        <Link state={props.state} className={ props.disabled ? styles.disabled + ' ' + styles[props.color] + ' ' + styles.button : styles[props.color] + ' ' + styles.button} to={props.url}>
                            {props.text}
                        </Link>
                    :
                        props.svg ?
                            <ButtonReacstrap className={ props.disabled ? styles.disabled + ' ' + styles[props.color] + ' ' + styles.button : styles[props.color] + ' ' + styles.button + ' ' + 'd-flex'} >
                                {props.text}
                                <div className="ml-2">
                            <img src={props.svg} alt={props.alt} />
                            </div>
                            </ButtonReacstrap>
                        :
                        props.disabled ?
                                <ButtonReacstrap className={ props.disabled ? styles.disabled + ' ' + styles[props.color] + ' ' + styles.button : styles[props.color] + ' ' + styles.button} >
                                    {props.text}
                                </ButtonReacstrap>
                            :
                                <ButtonReacstrap className={ props.disabled ? styles.disabled + ' ' + styles[props.color] + ' ' + styles.button : styles[props.color] + ' ' + styles.button} >
                                    {props.text}
                                </ButtonReacstrap>
                }
      </Ripples>
    </div>
  )
}

export default Button
