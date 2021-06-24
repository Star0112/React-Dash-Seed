import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle } from "react-feather";

import { tableData, tableColumns } from "./data.js";

const ExpandableRowsTable = () => {
  const expandRow = {
    renderer: row => (
      <div>
        <p>{`This Expand row is belong to "${row.name}"`}</p>
        <p>
          You can render anything here, also you can add additional data on
          every row object.
        </p>
      </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) =>
      isAnyExpands ? (
        <MinusCircle width={16} height={16} />
      ) : (
        <PlusCircle width={16} height={16} />
      ),
    expandColumnRenderer: ({ expanded }) =>
      expanded ? (
        <MinusCircle width={16} height={16} />
      ) : (
        <PlusCircle width={16} height={16} />
      )
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Expandable Rows</CardTitle>
        <h6 className="card-subtitle text-muted">
          Expandable rows by react-bootstrap-table2
        </h6>
      </CardHeader>
      <CardBody>
        <BootstrapTable
          bootstrap4
          bordered={false}
          keyField="name"
          data={tableData}
          columns={tableColumns}
          expandRow={expandRow}
          pagination={paginationFactory({
            sizePerPage: 10,
            sizePerPageList: [5, 10, 25, 50]
          })}
        />
      </CardBody>
    </Card>
  );
};

const Tables = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Expandable Rows</h1>

    <ExpandableRowsTable />
  </Container>
);

export default Tables;
