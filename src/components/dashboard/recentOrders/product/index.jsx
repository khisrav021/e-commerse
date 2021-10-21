import React from 'react'
import {Product, Status } from './styles';

function ProductCard(props) {
    return (
            <Product>
                    <div><p>{props.productID}</p></div>
                    <div className="DisplayFlex">
                        <div><img src={props.productImg} alt="image" /></div>
                        <div><p>{props.productName}</p></div>
                    </div>
                    <div><p>{props.date}</p></div>
                    <div><p>{props.price}</p></div>
                    <Status>{props.status}</Status>
                </Product>
    )
}

export default ProductCard
