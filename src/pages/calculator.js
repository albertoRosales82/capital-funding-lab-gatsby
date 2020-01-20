import React from 'react';

import './calculator.scss'

function Calculator (){
return (

<div className="content-calculator-area" style={{backgroundColor: 'rgb(31,79,92)'}}>
    <div className="calcula-title">Calcula tu crédito</div>
    <div className="calculator-container">
        <table className="table-calculator">
        <tbody>
            <tr>
                <td>
                    <form noValidate="">
        <table className="form-table tableShadow">
            <tbody>
                <tr>
                    <td className="formLabel">Tipo de Crédito:</td>
                    <td className="formInput"><label><input type="radio" value="Personal" checked=""></input></label>&nbsp;&nbsp;
                    <label><input type="radio" value="Comercial"></input></label>
                    </td>
                </tr>
                <tr>
                    <td className="formLabel">Monto del Crédito:</td>
                    <td className="formInput">
                        <input type="text" name="monto" placeholder="Hasta 10,000,000" value=""/>
                    </td>
                </tr>
                <tr>
                    <td className="formLabel">Plazo</td>
                    <td className="formInput">
                    <select className="select-css">
                        <option value="">Selecciona el Plazo</option>
                        <option value="12">12 Meses</option>
                        <option value="18">18 Meses</option>
                        <option value="24">24 Meses</option>
                        <option value="36">36 Meses</option>
                        <option value="48">48 Meses</option>
                    </select>
                </td>
                </tr>
                <tr>
                    <td className="formInput" colspan="2">
                        <select className="select-css">
                            <option value="">¿Cuál es tu perfil crediticio?</option>
                            <option value="AA">AA - Sobresaliente</option>
                            <option value="A">A - Excelente</option>
                            <option value="B">B - Superior</option>
                            <option value="C">C - Muy Bueno</option>
                            <option value="D">D - Bueno</option>
                            <option value="D">E - Adecuado</option>
                            <option value="D">F - Aceptable</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="formInput" colspan="2">
                        <select className="select-css">
                            <option value="">¿Cuál es el destino de tu crédito?</option>
                            <option value="9">Refinanciamiento de deudas anteriores</option>
                            <option value="7">Remodelación y construcción de vivienda</option>
                            <option value="4">Invertir en Educación</option>
                            <option disabled="">────────────────────</option>
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
                    </td>
                </tr>
                <tr>
                    <td colspan="2" className="centerSubmit">
                        <input type="submit" className="button-submit" value="Calcular"/>
                    </td>
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
        </td>
        </tr>
        </tbody>
        </table>
        </div>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin=""></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin=""></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js" crossorigin=""></script>
    <script type="text/babel" src="//www.capitalfundinglabs.com/js/calculator.js" crossorigin=""></script>
</div>

);
}

export default Calculator;