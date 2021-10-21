import React, { useState } from 'react'
import { ReactComponent as HamburgerMenuIcon } from "../../../asstets/icons/hamburgerMenu.svg";
import nikeAirMax from '../../../asstets/images/nikeAirMax.jpg'
import headphones from '../../../asstets/images/headphones.jpg'
import iphonePro from '../../../asstets/images/iphonePro.png'
import { RecentOrdersCard, DF, Title } from './styled';
import ProductCard from './product';

function RecentOrders() {

    
  const [product, setProduct] = useState([
    {
        productID: "#78522135",
        productImg: nikeAirMax,
        productName: "Nike Air Max",
        date: "31/03/2021",
        price: "$250.00",
        status: "Complete",
    },
    {
        productID: "#78522135",
        productImg: headphones,
        productName: "Headphones",
        date: "31/03/2021",
        price: "$250.00",
        status: "Pending",
    },
    {
        productID: "#78522135",
        productImg: iphonePro,
        productName: "Iphone Pro",
        date: "31/03/2021",
        price: "$250.00",
        status: "Cancled",
    },
  ]);

    return (
        <RecentOrdersCard>
            <div>
                <DF>
                    <div>
                        <h2>Recent Orders</h2>
                    </div>
                    <div className="svg">
                        <HamburgerMenuIcon/>
                    </div>
                </DF>
                <Title>
                    <div><p>Order ID :</p></div>
                    <div><p>Product Name:</p></div>
                    <div><p>Date:</p></div>
                    <div><p>Price:</p></div>
                    <div><p>Status:</p></div>
                </Title>
                
        {product.map((value) => (
          <ProductCard
          productID={value.productID}
          productImg={value.productImg}
          productName={value.productName}
          date={value.date}
          price={value.price}
          status={value.status}
          />
          ))}
            </div>
            <br />
            <b>See all</b>
            <br />
            <br />
        </RecentOrdersCard>
    )
}

export default RecentOrders
