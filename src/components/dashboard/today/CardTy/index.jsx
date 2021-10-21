import React from "react";
import { ReactComponent as SalesIcon } from "../../../../asstets/icons/sales.svg";
import { ReactComponent as HamburgerMenuIcon } from "../../../../asstets/icons/hamburgerMenu.svg";
import { ReactComponent as TopIcon } from "../../../../asstets/icons/top.svg";
import { Card, CardToday, Card1, Card2} from "./styles";

function CardTy(props) {
    return (
        
        <CardToday>
          <Card>
            <Card1>
              <div className="IconDiv">
                <SalesIcon />
              </div>
              <br />
              <div>
                <h2>{props.price}</h2>
              </div>
              <br />
              <div>
                <p>{props.today}</p>
              </div>
            </Card1>
            <Card2>
              <div className="HamburgerMenuIcon">
                <HamburgerMenuIcon />
              </div>
              <div className="DF">
                <div className="TopIcon">
                  <TopIcon />
                </div>
                <div><p>{props.benefit}</p></div>
              </div>
            </Card2>
          </Card>
        </CardToday>
    )
}

export default CardTy
