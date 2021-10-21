import React, { useState } from "react";
import { ReactComponent as SalesIcon } from "../../../asstets/icons/sales.svg";
import { ReactComponent as HamburgerMenuIcon } from "../../../asstets/icons/hamburgerMenu.svg";
import { ReactComponent as DownloadReport } from "../../../asstets/icons/downloadReport.svg";
import { ReactComponent as CalendarIcon } from "../../../asstets/icons/calendar.svg";
import { ReactComponent as DownIcon } from "../../../asstets/icons/section.svg";
import { ReactComponent as TopIcon } from "../../../asstets/icons/top.svg";
import { Title, TodayCard, TodayCards } from "./styles";
import CardTy from "./CardTy/index.jsx";

function Today() {
  const [state, setState] = useState([
    {
      price: "$25,255.00",
      today: "Today Sales",
      benefit: "+35%",
    },
    {
      price: "$1255.00",
      today: "Today Expenses",
      benefit: "+10%",
    },
    {
      price: "5355",
      today: "Today Visitors",
      benefit: "+15%",
    },
    {
      price: "$25,255.00",
      today: "Today Sales",
      benefit: "+35%",
    },
  ]);


  console.log(state);
  return (
    <TodayCard>
      <Title>
        <h1>Dashboard</h1>
        <button className="btn1">
          <DownloadReport /> <p>Download report</p>
        </button>
        <button className="btn2">
          <CalendarIcon /> <p>6 April, 2021</p> <DownIcon />
        </button>
      </Title>
      <br />
      <br />
      <TodayCards>
        {state.map((value) => (
          <CardTy
            price={value.price}
            today={value.today}
            benefit={value.benefit}
          />
          ))}
      </TodayCards>
    </TodayCard>
  );
}

export default Today;
