import React from "react";
import Dashboard from "../../components/dashboard/index.jsx";
import Navbar from "../../components/navbar/index.jsx";
import { DisplayFlex } from "./styles";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "../../components/orders/index.jsx";
import Products from "../../components/products/index.jsx";
import History from "../../components/history/index.jsx";
import Cart from "../../components/cart/index.jsx";
import SearchNavbar from "../../components/navbarSearch/index.jsx";
import AddProduct from "../../components/addProduct/index.jsx";

function MainPage() {
  
  

  return (
    <BrowserRouter>
      <DisplayFlex>
        <div>
          <Navbar />
        </div>
        <div>
          <SearchNavbar/>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
          </Switch>
        </div>
      </DisplayFlex>
    </BrowserRouter>
  );
}

export default MainPage;
