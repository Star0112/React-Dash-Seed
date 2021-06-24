import React from "react";

import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Table
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

const Products = () => (
  <Card className="flex-fill w-100">
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        Top Selling Products
      </CardTitle>
    </CardHeader>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xl-table-cell">Tech</th>
          <th className="d-none d-xl-table-cell">License</th>
          <th className="d-none d-xl-table-cell">Tickets</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abel Theme</td>
          <td>
            <Badge color="danger">Angular</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">80</td>
          <td className="d-none d-xl-table-cell">150</td>
        </tr>
        <tr>
          <td>Ada Theme</td>
          <td>
            <Badge color="info">Vue</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">60</td>
          <td className="d-none d-xl-table-cell">610</td>
        </tr>
        <tr>
          <td>AppStack Theme</td>
          <td>
            <Badge color="success">HTML</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">50</td>
          <td className="d-none d-xl-table-cell">720</td>
        </tr>
        <tr>
          <td>Libre Theme</td>
          <td>
            <Badge color="warning">React</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">30</td>
          <td className="d-none d-xl-table-cell">280</td>
        </tr>
        <tr>
          <td>Material Blog Theme</td>
          <td>
            <Badge color="info">Vue</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">10</td>
          <td className="d-none d-xl-table-cell">480</td>
        </tr>
        <tr>
          <td>Milo Theme</td>
          <td>
            <Badge color="warning">React</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">40</td>
          <td className="d-none d-xl-table-cell">280</td>
        </tr>
        <tr>
          <td>Spark Theme</td>
          <td>
            <Badge color="success">HTML</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">20</td>
          <td className="d-none d-xl-table-cell">480</td>
        </tr>
        <tr>
          <td>Von Theme</td>
          <td>
            <Badge color="danger">Angular</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">50</td>
          <td className="d-none d-xl-table-cell">350</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Products;
