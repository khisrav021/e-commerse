import React from "react";
import { Card, CartCard, Carts, Title } from "./styles";
import Photo from "../../../asstets/images/avatar.png";
import { ReactComponent as DaleteIcon } from "../../../asstets/icons/dalete.svg";

function Cart() {
  return (
    <CartCard>
      <Card>
        <Title>
          <h3>PHOTO</h3>
          <h3>NAME</h3>
          <h3>QUANTITY</h3>
          <h3>PRICE</h3>
          <h3>TOTAL</h3>
          <h3>dalete</h3>
        </Title>
        <Carts>
          <div>
            <img src={Photo} alt="" />
          </div>
          <div>
            <p>Dicital clock</p>
          </div>
          <div>
            
            <input type="number" placeholder="1"/>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <button>
              <DaleteIcon />
            </button>
          </div>
        </Carts>
        <br />
        <Carts>
          <div>
            <img src={Photo} alt="" />
          </div>
          <div>
            <p>Dicital clock</p>
          </div>
          <div>
            
            <input type="number" placeholder="1"/>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <button>
              <DaleteIcon />
            </button>
          </div>
        </Carts>
        <br />
        <Carts>
          <div>
            <img src={Photo} alt="" />
          </div>
          <div>
            <p>Dicital clock</p>
          </div>
          <div>
            
            <input type="number" placeholder="1"/>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <button>
              <DaleteIcon />
            </button>
          </div>
        </Carts>

        <br />
        <Carts>
          <div>
            <img src={Photo} alt="" />
          </div>
          <div>
            <p>Dicital clock</p>
          </div>
          <div>
            
            <input type="number" placeholder="1"/>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <button>
              <DaleteIcon />
            </button>
          </div>
        </Carts>

        <br />
        <Carts>
          <div>
            <img src={Photo} alt="" />
          </div>
          <div>
            <p>Dicital clock</p>
          </div>
          <div>
            <input type="number" placeholder="1"/>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <p>$1.190,90</p>
          </div>
          <div>
            <button>
              <DaleteIcon />
            </button>
          </div>
        </Carts>

        <br />
      </Card>
    </CartCard>
  );
}

export default Cart;