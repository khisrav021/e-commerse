import React from "react";
import ReactApexChart from "react-apexcharts";
import { DF, M, Results, SalesOverviewCard } from "./styles";
import { ReactComponent as DownIcon } from "../../../asstets/icons/section.svg";

function SalesOverview() {
  const series = [
    {
      name: "Servings",
      data: [44, 55, 41, 67, 22, 43, 21],
    },
  ];
  const options = {
    annotations: {
      points: [
        {
          x: "04 Jan",
          seriesIndex: 0,
          label: {
            borderColor: "#775DD0",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "today",
          },
        },
      ],
    },
    chart: {
      width: "600px",
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },

    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        // "08 Jan",
        // "09 Jan",
        // "10 Jan",
        // "11 Jan",
        // "12 Jan",
        // "13 Jan",
      ],
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Servings",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };

  return (
    <SalesOverviewCard>
      <M>
        <DF>
          <div>
            <h2>Sales Overview</h2>
          </div>
          <div className="btn2">
            <button>
              <p>Month</p> <DownIcon />
            </button>
          </div>
        </DF>
        <Results>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </Results>
      </M>
    </SalesOverviewCard>
  );
}

export default SalesOverview;
