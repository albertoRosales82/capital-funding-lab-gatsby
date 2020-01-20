import React from "react";
import './general.css';
import './footer.css';

const STYLES = {
  div0:{
    display: 'flex'
  },
  div1:{
    display: 'flex', lineHeight: '30px'
  },
  div2:{
    marginRight: '30px', width: '170px',display: 'block'
  },
  div3:{
    borderTop: '1px solid rgba(255,255,255,.2)',marginTop: '30px', paddingTop:'20px'
  },
  span0:{
    opacity:'0.5', textTransform:'uppercase', letterSpacing: '0px', fontSize:'13px'
  },
  small1:{
    color:"rgba(255,255,255,0.5)"
  }
}

function Footer(){
  return (
<div>


  <div id="footer-wrapper">
    <footer>
        <div id="footer-group-wrapper">
        </div>
        <div id="footer-bottom">
            <div id="footer-bottom-top" style={STYLES.div0}>
                <div style={STYLES.div1}>
                    <div style={STYLES.div2}>
                        <span style={STYLES.span0}>Products</span><br/>
                        <a href="https://registration.capitalfundinglabs.com/account/register?type=borrower">Solicitar crédito</a><br/>
                        <a href="https://registration.capitalfundinglabs.com/account/register?type=lender">Invertir</a><br/>
                    </div>
                    <div style={STYLES.div2}>
                        <span style={STYLES.span0}>Information</span><br/>
                        <a href="/">CFL</a><br/>
                        <a href="/contact/index.html">Contacto</a><br/>
                        <a href="/loanbookanalysis/index.html">Analytics</a><br/>
                        <a href="/faq/index.html">FAQs</a>
                    </div>
                </div>
                <div id="footer-bottom-top-legal">
                    <div id="footer-bottom-text">
                        <a href="https:////www.capitalfundinglabs.com/">Capital Funding Lab © 2019 Todos los derechos reservados.</a> &nbsp;&nbsp;&nbsp;<small style={STYLES.small1}>
                          <a href="//www.capitalfundinglabs.com/tos/index.html">Términos</a> | 
                          <a href="//www.capitalfundinglabs.com/pp/index.html">Privacidad</a> | 
                          <a href="//www.capitalfundinglabs.com/cookies/index.html">Políticas sobre las Cookies</a> | 
                          <a href="//www.capitalfundinglabs.com/complaints/index.html">Quejas</a> | 
                          <a href="//www.capitalfundinglabs.com/tasas/index.html">Consulta los Costos y las Comisiones de nuestros productos</a></small>
                                            </div>
                                            <br/>
                </div>
            </div>
            <br/>
                            <div style={STYLES.div3}>
                    <small className="disclaimer">
                        Powered by Capital Funding Lab © 2019 Todos los derechos reservados, 
                        En términos de las Disposiciones Transitorias de la Ley para Regular las Instituciones de Tecnología Financiera promulgada por el Presidente Constitucional de los Estados Unidos Mexicanos y publicada en el Diario Oficial de la Federación el 9 de marzo de 2018, Emprendimientos Maussan y Gonzalez SAPI de CV hace constar que previo a la entrada en vigor de dicha ley se encuentra realizando actividades reguladas en la misma. Por lo anterior, Emprendimientos Maussan y Gonzalez SAPI de CV solicitará la autorización respectiva ante la Comisión Nacional Bancaria y de Valores y en su caso ante el Banco de México, en los términos que se establezca en las disposiciones de carácter general que para tal efecto se emitan. Al momento que Emprendimientos Maussan y Gonzalez SAPI de CV, solicite su autorización, señalaremos que ésta se encuentra en trámite por lo que las actividades realizadas durante dicho periodo no están supervisadas por las autoridades mexicanas competentes. Estimamos que la autorización se otorgue en los plazos que se señalan en la ley respectiva y disposiciones de carácter general que para tal efecto se emitan.
                    </small>
                </div>
                <br/>
        </div>
    </footer>
  </div>
  <div id="menu-background" onClick="closeMenu()"></div>
  </div>
  );
}

export default Footer;