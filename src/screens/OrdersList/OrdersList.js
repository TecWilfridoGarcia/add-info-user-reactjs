import React from 'react';
import Item from '../../components/Item/Item'
import "./styles.scss"
import { useFetch } from "../../hooks/useFetch";

export default function OrdersList() {
  const url = 'https://blackisp.herokuapp.com/products';
  const { data, loading, error } = useFetch(url);
  const price = data?.map(item =>  parseFloat(item.price))

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

 const priceFloat = price?.reduce((acc, item) => {
    const sum = acc + item
      return sum;
  }, 0)
  
  return (
    <div>
      <div className="header-order">
        <h1 className="title">RESUMEN DE LA ORDEN</h1>
      </div>
      {data?.map(item => 
        <Item 
          key={item.name}
          image={item.image} 
          name={item.name} 
          price={numberWithCommas(item.price)}/>
      )}
      <div className="option">
        <button type="button" className="button">Editar</button>
      </div>
      <div className="sub-total">
        <div className="price">
          <p>SUBTOTAL</p>
          <p>
            ${
              numberWithCommas(priceFloat)
            }.<span>00</span>
          </p>
        </div> 
        <div className="send">
          <p>ENVÍO</p>
          <p>A Calcular</p>
        </div>  
      </div>
      <div className="total">
        <div className="price-total">
          <p>
            TOTAL
          </p>
          <p>
            ${
              numberWithCommas(priceFloat)
            }.<span>00</span>
          </p>
        </div>
      
      </div>
    </div>
    )
  }
