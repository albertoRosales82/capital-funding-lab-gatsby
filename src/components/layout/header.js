import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import Button from "./../elements/button"
import styles from "./header.module.scss"
import "./../../styles/general.scss"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={styles.headerWrapper}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            id="header-logo"
            width="80"
            src="//www.capitalfundinglabs.com/img/cfl-logo-2.png"
            alt="CFL Logo"
            className={styles.logo+ " m-0 p-0 ml-5"}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end">
          <Nav className="row " navbar>
            <NavItem className="col-6 px-4">
              <Button color="whiteNav" text="Registrarse" />
            </NavItem>
            <NavItem className="col-6 px-4">
              <Button color="greennav" text="Entrar" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
