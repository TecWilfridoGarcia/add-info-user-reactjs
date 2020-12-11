import React from 'react'
import "./styles.scss"

export default function Item(props) {
    return (
        <section className="item">
            <img src={props.image}/>
            <p className="name-product">{props.name}</p>
            <p className="price-product">${props.price}.<span>00</span></p>
        </section>
    )
}
