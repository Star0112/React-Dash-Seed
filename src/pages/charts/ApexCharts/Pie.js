import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const PieChart = ({ theme }) => {
  const data = [44, 55, 13, 33];

  const options = {
    dataLabels: {
      enabled: false
    },
    colors: [
      theme.primary,
      theme.success,
      theme.warning,
      theme.danger,
      theme.info
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Pie Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          Pie charts are an instrumental visualization tool useful in expressing
          data and information in terms of percentages, ratio.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Chart options={options} series={data} type="donut" height="350" />
        </div>
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(PieChart);
