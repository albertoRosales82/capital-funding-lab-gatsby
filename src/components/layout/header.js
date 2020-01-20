import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonToolbar, Button } from "reactstrap";


import './header.css';
import './../../styles/general';

function Header() {
  return (
    <div id="header-wrapper">
    <div id="menu-button" ></div>
    <nav>
      <NavLink exact activeClassName="active" to="index">
      {/* <img id="header-logo" width="80" src="//www.capitalfundinglabs.com/img/cfl-logo.png" onClick="trackClick('Header - logo');" /> */}
      <img id="header-logo" width="80" src="//www.capitalfundinglabs.com/img/cfl-logo.png"/>
      </NavLink>
      </nav>

    {/* <div id="header-menu">
        <div className="menu-option">
        </div><div className="menu-option">
        </div><div className="menu-option">
        </div>
    </div> */}

    <div id="header-buttons">

  <ButtonToolbar style={{padding:'22px 0 0 0'}}>
    <Button className="button header-button" style={{border:'1px solid'}} id="header-button1" variant="outline-primary">Registrarse</Button>
    <Button className="button header-button" style={{border:'0px solid'}} id="header-button2" variant="Entrar">Entrar</Button>
  </ButtonToolbar>

       {/* <a class="button header-button" id="header-button1" 
        href="https://registration.capitalfundinglabs.com/account/register">Registrarse</a>
        <a class="button header-button" id="header-button2" 
        href="https://registration.capitalfundinglabs.com/">Entrar</a> */}
    </div>
</div>
  );
}
export default Header;