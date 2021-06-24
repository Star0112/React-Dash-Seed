import React from "react";
import { Polar } from "react-chartjs-2";
import { connect } from "react-redux";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const PolarChart = ({ theme }) => {
  const data = {
    labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
    datasets: [
      {
        label: "Model S",
        data: [35, 38, 65, 70, 24],
        backgroundColor: [
          theme.primary,
          theme.success,
          theme.danger,
          theme.warning,
          "#5b7dff"
        ]
      }
    ]
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Polar Area Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          Polar area charts are similar to pie charts, but each segment has the
          same angle.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Polar data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(PolarChart);
