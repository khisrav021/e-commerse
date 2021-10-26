import React from 'react'
import { AllClearButton, Buttons, CheckoutButton, CheckoutCard, CheckoutDiv, CouponCode } from './styles'

function Checkout() {
    return (
        <div>
            <CheckoutCard>
            <CheckoutDiv>
                <CouponCode>
                    <form>
                    <input type="text" placeholder="Coupon Code" />
                    <button>Apply</button>
                    </form>
                </CouponCode>
                <h3>Order note:</h3>
                <textarea cols="31" rows="5" />
            </CheckoutDiv>
        </CheckoutCard>
        <Buttons>
            <AllClearButton>All Clear</AllClearButton>
            <CheckoutButton>Checkout</CheckoutButton>
        </Buttons>
        </div>
    )
}

export default Checkout
