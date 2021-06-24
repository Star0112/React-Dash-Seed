import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { tableData, tableColumns } from "./data.js";

const PaginationTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Pagination</CardTitle>
        <h6 className="card-subtitle text-muted">
          Pagination by react-bootstrap-table2
        </h6>
      </CardHeader>
      <CardBody>
        <BootstrapTable
          keyField="name"
          data={tableData}
          columns={tableColumns}
          bootstrap4
          bordered={false}
          pagination={paginationFactory({
            sizePerPage: 5,
            sizePerPageList: [5, 10, 25, 50]
          })}
        />
      </CardBody>
    </Card>
  );
};

const Tables = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Pagination</h1>

    <PaginationTable />
  </Container>
);

export default Tables;
