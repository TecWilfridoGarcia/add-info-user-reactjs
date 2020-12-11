import React from 'react'
import Form from '../Form/Form'
import OrdersList from '../OrdersList/OrdersList'
import "./styles.scss"
export default function Order() {
    return (
        <div className="wrapper-order">
            <div className="wrapper-form">
                <div className="header-form"><h1 className="title">DIRECCIÓN DE ENVÍO</h1></div>
              <Form/>   
            </div>
            <div className="wrapper-orders">
                <OrdersList/>
            </div>
           
        </div>
    )
}
