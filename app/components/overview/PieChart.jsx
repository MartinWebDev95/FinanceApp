'use client'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const PieChart = ({ budgets }) => {

  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      style:{ 
        display: 'none'
      }
    },
    tooltip: {
      animation: true,
      style: {
        fontSize: '.9em'
      }
    },
    legend: {
      style: {
        display: 'none'
      }
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: false,
          }, 
          {
            enabled: true,
            distance: -60,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.1em',
              textOutline: 'none',
              opacity: 0.7
            },
          }
        ]
      }
    },
    series: [{
      name: 'Budgets',
      colorByPoint: true,
      data: budgets.map(budget => (
        {
          name: budget.label,
          y: Math.abs(budget.total_transactions_amount),
          color: budget.theme
        }
      )),
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} /> 
}

export default PieChart;