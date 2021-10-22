import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts } from "../../../redux/modules/getPosts/getPostsAction.js";
import { ReactComponent as CalendarIcon } from "../../../asstets/icons/calendar.svg";
import { ReactComponent as DownIcon } from "../../../asstets/icons/section.svg";
import { OrdersCard, Text, Title, Product, Status, Titles } from "./styles";
import nikeAirMax from "../../../asstets/images/nikeAirMax.jpg";

function OrdersContent() {
  const posts = useSelector((state) => state.getPostsReducer);

  console.log("posts", posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <OrdersCard>
        <Title>
          <div>
            <h1>Product</h1>
          </div>
          <div>
            <p>15 products found</p>
          </div>
          <div className="btn2">
            <button>
              <CalendarIcon /> <p>6 April, 2021</p> <DownIcon />
            </button>
          </div>
        </Title>
        <Text>
          <h3>All products</h3>
          <h3>Completed</h3>
          <h3>Panding</h3>
          <h3>Cancel</h3>
        </Text>
        <Titles>
          <div>
            <p>Product ID :</p>
          </div>
          <div>
            <p>Product Name:</p>
          </div>
          <div>
            <p>Address:</p>
          </div>
          <div>
            <p>Date:</p>
          </div>
          <div>
            <p>Price:</p>
          </div>
          <div>
            <p>Status:</p>
          </div>
        </Titles>
        {posts.success && !posts.loading
          ? posts?.posts.map((post) => (
                <Product key="">
                <div>
                  <p>#{post.id}</p>
                </div>
                <div className="DisplayFlex">
                  <div>
                    <img src={post.imageId} alt="image" />
                  </div>
                  <div>
                    <p>{post.productName}</p>
                  </div>
                </div>
                <div>
                  <p>6391 Elign St. Celina</p>
                </div>
                <div>
                  <p>31/03/2021</p>
                </div>
                <div>
                  <p>${post.price}</p>
                </div>
                <Status><b className="edit">✏</b><b className="delete">❌</b></Status>
              </Product>
            ))
          : ""}
        <h1>{posts.loading ? "loading..." : ""}</h1>
        {/* <Product>
                    <div><p>1</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product>
            <Product>
                    <div><p>2</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product>
            <Product>
                    <div><p>3</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product> */}

        {/* {data.map((post)=>( */}

        {/* <Product>
                    <div><p>4</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product> */}
        {/* <Product>
                    <div><p>5</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div> */}
        {/* <Status>Complete</Status>
                </Product>
            <Product>
                    <div><p>6</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product>
            <Product>
                    <div><p>7</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product>
            <Product>
                    <div><p>8</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product>
            <Product>
                    <div><p>9</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product>
            <Product>
                    <div><p>10</p></div>
                    <div><p>#78522135</p></div>
                    <div className="DisplayFlex">
                        <div><img src={nikeAirMax} alt="image" /></div>
                        <div><p>Nike Air Max</p></div>
                    </div>
                    <div><p>6391 Elign St. Celina</p></div>
                    <div><p>31/03/2021</p></div>
                    <div><p>$250.00</p></div>
                    <Status>Complete</Status>
                </Product> */}
        {/* productID: "#78522135",
        productImg: nikeAirMax,
        productName: "Nike Air Max",
        date: "31/03/2021",
        price: "$250.00",
        status: "Complete", */}
      </OrdersCard>
    </div>
  );
}

export default OrdersContent;
