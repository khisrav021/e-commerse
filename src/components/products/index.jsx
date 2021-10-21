import React from 'react'
import Cart from './cart/index.jsx'
import Price from './price/index.jsx'
import { DF } from './styles.js'

function Products() {
    return (
        <div>
            <DF >
            <Cart />
            <div>
                <Price />
            </div>
            </DF>
        </div>
    )
}

export default Products
