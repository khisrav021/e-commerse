import React, { useState } from "react";
import { ReactComponent as DashboardLogo } from "../../asstets/icons/dashboard.svg";
import { ReactComponent as OrdersLogo } from "../../asstets/icons/orders.svg";
import { ReactComponent as ProductsLogo } from "../../asstets/icons/products.svg";
import { ReactComponent as HistoryLogo } from "../../asstets/icons/history.svg";
import { ReactComponent as LogOutLogo } from "../../asstets/icons/logOut.svg";
import { ReactComponent as CartLogo } from "../../asstets/icons/orders.svg";
import { Linke, Links, Nav } from "./styles";



import { NavLink } from "react-router-dom";
// import LogOut from "../logOut";

function Navbar() {
  return (
    <>
    <Nav>
      <div className="bg">
      <h1>E-commerse</h1>
      <Links>
      <NavLink exact to="/" activeClassName="active">
        <Linke className="Linke">
          <div>
            <DashboardLogo />
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </Linke>
        </NavLink>
        <br />
        <NavLink to="/orders" activeClassName="active">
        <Linke className="Linke">
          <div>
            <OrdersLogo />
          </div>
          <div>
            <p>Orders</p>
          </div>
        </Linke>
        </NavLink>
        <br />
        <NavLink to="/products" activeClassName="active">
        <Linke className="Linke">
          <div>
            <ProductsLogo />
          </div>
          <div>
            <p>Products</p>
          </div>
        </Linke>
        </NavLink>
        <br />
        <NavLink to="/history" activeClassName="active">
        <Linke className="Linke">
          <div>
            <HistoryLogo />
          </div>
          <div>
            <p>History</p>
          </div>
        </Linke>
        </NavLink>
        <br />
        <NavLink to="/cart" activeClassName="active">
        <Linke className="Linke">
          <div>
            <CartLogo />
          </div>
          <div>
            <p>Cart</p>
          </div>
        </Linke>
        </NavLink>
      </Links>
      <br />
      <br />
      <br />
      <br />
        {/* <LogOut /> */}
        </div>
    </Nav>
    </>
  );
}

export default Navbar;
