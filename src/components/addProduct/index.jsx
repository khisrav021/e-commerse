import React from 'react'
import ProductTitle from './productTitle'
import { AddProductCard } from './styles'

function AddProduct() {
    return (
        <AddProductCard>
            <h1>
            Create a new product
            </h1>
            <br />
            <h3>
                Dashboard <b>&#8231;</b> E-commerse <b>&#8231; New porduct</b>
            </h3>
            <ProductTitle />
        </AddProductCard>
    )
}

export default AddProduct
