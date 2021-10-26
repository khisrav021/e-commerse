import React from 'react'
import { DF, PriceCard } from './styles'

function Price() {
    return (
        <PriceCard>
            <h1>Price</h1>
            <DF>
                <div>
                    <h3>Sub Total:</h3>
                    <h3>Shipping :</h3>
                    <h3>Tax(18%):</h3>
                    <h3>Total:</h3>
                </div>
                <div>
                    <h3>$1.442,78</h3>
                    <h3>Free</h3>
                    <h3>$259.70</h3>
                    <h3>$1.702,48</h3>
                </div>
            </DF>
        </PriceCard>
    )
}

export default Price