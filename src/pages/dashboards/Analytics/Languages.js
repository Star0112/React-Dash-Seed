import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
  UncontrolledDropdown,
  Progress
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

const Languages = () => (
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
        Languages
      </CardTitle>
    </CardHeader>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Language</th>
          <th className="text-right">Users</th>
          <th className="d-none d-xl-table-cell w-75">% Users</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>en-us</td>
          <td className="text-right">735</td>
          <td className="d-none d-xl-table-cell">
            <Progress color="info" value={43}>
              43%
            </Progress>
          </td>
        </tr>
        <tr>
          <td>en-gb</td>
          <td className="text-right">223</td>
          <td className="d-none d-xl-table-cell">
            <Progress color="info" value={27}>
              27%
            </Progress>
          </td>
        </tr>
        <tr>
          <td>fr-fr</td>
          <td className="text-right">181</td>
          <td className="d-none d-xl-table-cell">
            <Progress color="info" value={22}>
              22%
            </Progress>
          </td>
        </tr>
        <tr>
          <td>es-es</td>
          <td className="text-right">132</td>
          <td className="d-none d-xl-table-cell">
            <Progress color="info" value={16}>
              16%
            </Progress>
          </td>
        </tr>
        <tr>
          <td>de-de</td>
          <td className="text-right">118</td>
          <td className="d-none d-xl-table-cell">
            <Progress color="info" value={15}>
              15%
            </Progress>
          </td>
        </tr>
        <tr>
          <td>ru-ru</td>
          <td className="text-right">98</td>
          <td className="d-none d-xl-table-cell">
            <Progress color="info" value={13}>
              13%
            </Progress>
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Languages;
