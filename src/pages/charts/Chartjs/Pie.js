import React from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const PieChart = ({ theme }) => {
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          theme.primary,
          theme.warning,
          theme.danger,
          "#E8EAED"
        ],
        borderColor: "transparent"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Pie Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          Pie charts are excellent at showing the relational proportions between
          data.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart chart-sm">
          <Pie data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(PieChart);
