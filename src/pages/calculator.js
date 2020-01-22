import React, { Component } from "react"

import './calculator.scss'

const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return '$' + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  }; 

class Calculator extends Component {

    constructor(props) {
      super(props);
      this.state = {
        monto: '',
        tipoDeCredito: 'Personal',
        plazo: '',
        perfil: '',
        destino: '',
        errors: {},
  
        showCalculation: false,
        fetchInProgress: false,
        calculationResults: {}
      };
  
      this.handleMontoChange = this.handleMontoChange.bind(this);
      this.handleTipoCreditoChange = this.handleTipoCreditoChange.bind(this);
      this.handlePlazoChange = this.handlePlazoChange.bind(this);
      this.handlePerfilChange = this.handlePerfilChange.bind(this);
      this.handleDestinoChange = this.handleDestinoChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.reset = this.reset.bind(this);
  
      console.log(window.siteURIRoot);
    }
  
    handleMontoChange(event) {
      this.setState({ monto: event.target.value });
    }
  
    handlePerfilChange(event) {
      this.setState({ perfil: event.target.value });
    }
  
    handleDestinoChange(event) {
      this.setState({ destino: event.target.value });
    }
  
    handleTipoCreditoChange(event) {
      this.setState({ tipoDeCredito: event.target.value });
    }
  
    handlePlazoChange(event) {
      this.setState({ plazo: event.target.value });
    }
  
    validateForm() {
      let lerrors = {};
      if (!this.state.monto) {
        lerrors.monto = "Debe introducir un monto"
      }
      if (this.state.monto && this.state.monto < 10000) {
        lerrors.monto = "El monto minimo para solicitar un credito es de $10,000"
      }
      if (this.state.monto && this.state.monto > 10467775 && this.state.tipoDeCredito == 'Comercial' ) {
        lerrors.monto = "El monto máximo para solicitar un credito es de $10,467,775"
      }
      if (this.state.monto && this.state.monto > 313467 && this.state.tipoDeCredito == 'Personal') {
        lerrors.monto = "El monto máximo para solicitar un credito es de $313,467"
      }
      if (!this.state.plazo && this.state.plazo.length < 1) {
        lerrors.plazo = "Debe introducir un plazo"
      }
      if (!this.state.perfil && this.state.perfil.length < 1) {
        lerrors.perfil = "Debe introducir su perfil de cliente"
      }
      if (!this.state.destino && this.state.destino.length < 1) {
        lerrors.perfil = "Debe introducir el destino de su crédito"
      }
      this.setState({ errors: lerrors });
      return Object.entries(lerrors).length === 0;
    }
  
  
  
    calculate(customerType, term, amount, customerProfile) {
  
      let param = "customerType=${customerType}&term=${term}&amount=${amount}&customerProfile=${customerProfile}";
      param = param.replace('${customerType}', customerType);
      param = param.replace('${term}', term);
      param = param.replace('${amount}', amount);
      param = param.replace('${customerProfile}', customerProfile);
  
      this.setState({
        fetchInProgress:true,
        showCalculation: false
      });
  
      const that = this;
      fetch(window.calcServiceURL + "credit-calculator?" + param)
            .then(response => {
              if (response.status === 400) {
                response.json().then(function(object) {
                  console.log(object.type, object.message);
                })
              } else if (response.status === 200) {
                response.json().then(function(json) {
                  
                  let creditResult = json.body;
                  let lcalculationResults = {};
                  lcalculationResults.montoBruto = formatMoney(creditResult.loanRequested);
                  lcalculationResults.montoNeto = formatMoney(creditResult.loanToBeCredited);
                  lcalculationResults.cuotaPromedio = formatMoney(creditResult.averageQuota);
                  lcalculationResults.tna = creditResult.nominalAnnualRate  + "%";
                  lcalculationResults.plazo = term;
                  lcalculationResults.costFinTotalBruto = creditResult.costBeforeTaxes + "%";
                  lcalculationResults.costFInTotalIva = creditResult.costAfterTaxes + "%";
                  lcalculationResults.comision = formatMoney(creditResult.comission);
  
                  that.setState({ calculationResults: lcalculationResults,
                  showCalculation:true,
                  fetchInProgress:false });
  
                  
                })
              }
            }) 
      
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if (this.validateForm()) {
        this.calculate(this.state.tipoDeCredito,
             this.state.plazo, this.state.monto, this.state.perfil);
      }
    }
  
    reset() {
      this.setState({
        monto: '',
        tipoDeCredito: 'Personal',
        plazo: '',
        perfil: '',
        destino: '',
        errors: {},
  
        showCalculation: false,
        calculationResults: {}
      });
    }
    render() {
      return (
        <table className="table-calculator">
          <tbody>
            <tr>
              <td>
                <form onSubmit={this.handleSubmit} noValidate>
                  <table className="form-table tableShadow">
                    <tbody>
                      <tr>
                        <td className="formLabel">Tipo de Crédito:</td>
                        <td className="formInput">
                         <label><input type="radio" value="Personal" onChange={this.handleTipoCreditoChange} checked={this.state.tipoDeCredito === 'Personal'} />Personal</label>
                          &nbsp;&nbsp;<label><input type="radio" value="Comercial" onChange={this.handleTipoCreditoChange} checked={this.state.tipoDeCredito === 'Comercial'} />Comercial</label>
                        </td>
                      </tr>
                      <tr>
                        <td className="formLabel">Monto del Crédito:</td>
                        <td className="formInput">
                          <input type="text" name="monto" placeholder="Hasta 10,000,000" value={this.state.monto} onChange={this.handleMontoChange} />
                          {this.state.errors.monto && <p className="error">{this.state.errors.monto}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="formLabel">Plazo</td>
                        <td className="formInput">
                          <select className="select-css" value={this.state.plazo} onChange={this.handlePlazoChange}>
                            <option value="">Selecciona el Plazo</option>
                            <option value="12">12 Meses</option>
                            <option value="18">18 Meses</option>
                            <option value="24">24 Meses</option>
                            <option value="36">36 Meses</option>
                            <option value="48">48 Meses</option>
                          </select>
                          {this.state.errors.plazo && <p className="error">{this.state.errors.plazo}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="formInput" colSpan="2">
                          <select className="select-css" value={this.state.perfil} onChange={this.handlePerfilChange}>
                            <option value="">¿Cuál es tu perfil crediticio?</option>
                            <option value="AA">AA - Sobresaliente</option>
                            <option value="A">A - Excelente</option>
                            <option value="B">B - Superior</option>
                            <option value="C">C - Muy Bueno</option>
                            <option value="D">D - Bueno</option>
                            <option value="D">E - Adecuado</option>
                            <option value="D">F - Aceptable</option>
                          </select>
                          {this.state.errors.perfil && <p className="error">{this.state.errors.perfil}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="formInput" colSpan="2">
                          <select className="select-css" value={this.state.destino} onChange={this.handleDestinoChange}>
                            <option value="">¿Cuál es el destino de tu crédito?</option>
                            <option value="9">Refinanciamiento de deudas anteriores</option>
                            <option value="7">Remodelación y construcción de vivienda</option>
                            <option value="4">Invertir en Educación</option>
                            <option disabled="disabled">────────────────────</option>
                            <option value="2">Cambio de vehículo</option>
                            <option value="3">Gastos médicos</option>
                            <option value="10">Refinanciamiento tarjetas de crédito</option>
                            <option value="6">Viaje</option>
                            <option value="5">Gastos de boda</option>
                            <option value="12">Gastos de celebración</option>
                            <option value="1">Decoración</option>
                            <option value="11">Gastos de mudanza</option>
                            <option value="100">Otros destinos</option>
                          </select>
                          {this.state.errors.destino && <p className="error">{this.state.errors.destino}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="centerSubmit"><input type="submit" value="Calcular" className="button-submit" /></td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td className="costo-credito">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </td>
              <td className="colTableResults">
              {this.state.fetchInProgress ?
                  <div className="divTable tableShadow">
                    <img src={window.siteURIRoot + "/img/spinner.gif"} width="100" height="100"  />
                  </div>
              : null}
                {this.state.showCalculation ?
                  <div className="divTable tableShadow">
                    <div className="divTableBody">
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Monto Solicitado</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.montoBruto}</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Monto a acreditar</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.montoNeto}</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Cuota Promedio</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.cuotaPromedio}</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Plazo</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.plazo}&nbsp;Meses</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Tasa nominal actual (TNA)</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.tna}</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Costo financiero Total s/IVA</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.costFinTotalBruto}</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Costo financiero Total c/IVA</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.costFInTotalIva}</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Comision de uso de plataforma</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.comision}</div>
                      </div>
                      <div className="divLastTableRow">
                      </div>
                      <div className="divTableRow">
                        <div>&nbsp;</div>
                        <div className="divTableCell2"><input type="button" onClick={this.reset} value="Volver a Intentar" /></div>
                      </div>
                    </div>
                  </div> : null}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }

export default Calculator;