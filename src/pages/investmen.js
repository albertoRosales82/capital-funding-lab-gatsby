import React from 'react';

function Invest(){
return(
<div className="content-investment-area" style={{backgroundColor: '#fff'}}>
    <div className="investment-title">Calcula tu Inversión</div>
    <div className="investment-container"><table className="table-calculator">
        <tbody>
            <tr>
                <td>
                    <form noValidate="">
                        <table className="form-table-invest tableShadow">
                            <tbody>
                                <tr>
                                    <td className="formLabel">Inversión:</td>
                                    <td className="formInput">
                                        <label>
                                            <input type="radio" value="Personal" checked=""/></label>
                                            <label>
                                                <input type="radio" value="Comercial"/></label>
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td className="formLabel">Monto de Inversión:</td>
                                                    <td className="formInput">
                                                        <input type="text" name="monto" placeholder="" value=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="formLabel">Plazo</td>
                                                            <td className="formInput">
                                                                <select className="select-css">
                                                                    <option value="">Selecciona el Plazo</option>
                                                                    <option value="1">1 Mes</option>
                                                                    <option value="3">3 Meses</option>
                                                                    <option value="6">6 Meses</option>
                                                                    <option value="12">12 Meses</option>
                                                                    <option value="12">24 Meses</option>
                                                                    <option value="48">36 Meses</option>
                                                                </select>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="formLabel">Producto</td>
                                                                <td className="formInput">
                                                                    <select className="select-css">
                                                                        <option value="">Selecciona el Producto</option>
                                                                        <option value="Uno">Uno</option>
                                                                        <option value="Cuenta">Cuenta</option>
                                                                        <option value="Mercado">Mercado</option>
                                                                    </select>
                                                                    </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2" className="centerSubmit"><br/>
                                                                    </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2" className="centerSubmit">
                                                                    <input type="submit" className="button-submit-invest" value="Calcular"/>
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
    <script src="https://code.highcharts.com/highcharts.js" crossOrigin=""></script>
    <script src="https://code.highcharts.com/modules/exporting.js" crossOrigin=""></script>
    <script src="https://code.highcharts.com/modules/export-data.js" crossOrigin=""></script>
    <script src="https://code.highcharts.com/modules/accessibility.js" crossOrigin=""></script>
    <script type="text/babel" src="//www.capitalfundinglabs.com/js/invest-calculator.js" crossOrigin=""></script>
</div>
);
}

export default Invest;