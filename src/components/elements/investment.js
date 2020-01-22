import React, { Component } from "react"

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
  
  class InvestCalculator extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        monto: '',
        tipoDeCredito: 'Personal',
        plazo: '',
        type: '',
        errors: {},
  
        showCalculation: false,
        fetchInProgress: false,
        calculationResults: {}
      };
  
      this.handleMontoChange = this.handleMontoChange.bind(this);
      this.handleTipoCreditoChange = this.handleTipoCreditoChange.bind(this);
      this.handlePlazoChange = this.handlePlazoChange.bind(this);
      this.handleTypeChange = this.handleTypeChange.bind(this);
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
  
    handleTypeChange(event) {
      this.setState({ type: event.target.value });
    }
  
    handlePlazoChange(event) {
      this.setState({ plazo: event.target.value });
    }
  
    validateForm() {
      let lerrors = {};
      if (!this.state.monto) {
        lerrors.monto = "Debe introducir un monto"
      }
      if (this.state.monto && this.state.monto < 22) {
        lerrors.monto = "El monto minimo para invertir es de $22.00 pesos"
      }
      if (!this.state.plazo && this.state.plazo.length < 1) {
        lerrors.plazo = "Debe introducir un plazo"
      }
      if (!this.state.type && this.state.type.length < 1) {
        lerrors.type = "Debe introducir un producto"
      }
  
      this.setState({ errors: lerrors });
      return Object.entries(lerrors).length === 0;
    }
  
  
    calculate(type, term, amount) {
  
      let param = "type=${type}&term=${term}&amount=${amount}";
      param = param.replace('${type}', type);
      param = param.replace('${term}', term);
      param = param.replace('${amount}', amount);
  
      this.setState({
        fetchInProgress:true,
        showCalculation: false
      });
      const that = this;
      fetch(window.calcServiceURL + "investment-calculator?" + param)   
          .then(response => {
            if (response.status === 400) {
              response.json().then(function(object) {
                console.log(object.type, object.message);
              })
            } else if (response.status === 200) {
              response.json().then(function(json) {
                  let calculationResults = json.body;
                  calculationResults.total = formatMoney(calculationResults.total);
                  that.setState({ calculationResults,
                  showCalculation:true,
                  fetchInProgress:false });
                })
              }
            })     
    }
  
    handleSubmit(event) {
      event.preventDefault();
      //console.log();
      if (this.validateForm()) {
        this.calculate(this.state.type,
             this.state.plazo, this.state.monto);
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
                  <table className="form-table-invest tableShadow">
                    <tbody>
                      <tr>
                        <td className="formLabel">Inversión:</td>
                        <td className="formInput">
                          <label><input type="radio" value="Personal" onChange={this.handleTipoCreditoChange} checked={this.state.tipoDeCredito === 'Personal'} />Personal</label>
                          <label><input type="radio" value="Comercial" onChange={this.handleTipoCreditoChange} checked={this.state.tipoDeCredito === 'Comercial'} />Comercial</label>
                        </td>
                      </tr>
                      <tr>
                        <td className="formLabel">Monto de Inversión:</td>
                        <td className="formInput">
                          <input type="text" name="monto" placeholder="" value={this.state.monto} onChange={this.handleMontoChange} />
                          {this.state.errors.monto && <p className="error">{this.state.errors.monto}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="formLabel">Plazo</td>
                        <td className="formInput">
                          <select className="select-css" value={this.state.plazo} onChange={this.handlePlazoChange}>
                            <option value="">Selecciona el Plazo</option>
                            <option value="1">1 Mes</option>
                            <option value="3">3 Meses</option>
                            <option value="6">6 Meses</option>
                            <option value="12">12 Meses</option>
                            <option value="12">24 Meses</option>
                            <option value="48">36 Meses</option>
                          </select>
                          {this.state.errors.plazo && <p className="error">{this.state.errors.plazo}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="formLabel">Producto</td>
                        <td className="formInput">
                          <select className="select-css" value={this.state.type} onChange={this.handleTypeChange}>
                            <option value="">Selecciona el Producto</option>
                            <option value="Uno">Uno</option>
                            <option value="Cuenta">Cuenta</option>
                            <option value="Mercado">Mercado</option>
                          </select>
                          {this.state.errors.type && <p className="error">{this.state.errors.type}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="centerSubmit"><br /></td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="centerSubmit"><input type="submit" value="Calcular" className="button-submit-invest" /></td>
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
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Rentabilidad</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.rate}%</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell1">&nbsp;<span className="tooltip">Resultado proyectado de su inversión</span></div>
                        <div className="divTableCell2">&nbsp;{this.state.calculationResults.total}</div>
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

export default InvestCalculator;