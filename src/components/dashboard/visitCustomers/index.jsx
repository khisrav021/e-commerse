import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { DF, Statics, VisitCustomerCard } from './styles'
import { ReactComponent as HamburgerMenuIcon } from "../../../asstets/icons/hamburgerMenu.svg";

function VisitCustomer() {

  const  series = [44, 55, 41, 17, 15];
           const options= {
              chart: {
                width: 300,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            };

    return (
        <VisitCustomerCard>
        <DF>
          <div>
            <h2>Visit Customers</h2>
          </div>
                    <div className="svg">
                        <HamburgerMenuIcon/>
                    </div>
        </DF>
        <Statics>
        <ReactApexChart options={options} series={series} type="donut" width={"300px"}  />
    
        </Statics>
        </VisitCustomerCard>
    )
}

export default VisitCustomer
