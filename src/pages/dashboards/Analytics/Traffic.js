import React from "react";

import {
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

const Traffic = () => (
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
        Traffic
      </CardTitle>
    </CardHeader>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Source</th>
          <th className="text-right">Users</th>
          <th className="d-none d-xl-table-cell text-right">Sessions</th>
          <th className="d-none d-xl-table-cell text-right">Bounce Rate</th>
          <th className="d-none d-xl-table-cell text-right">
            Avg. Session Duration
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google</td>
          <td className="text-right">1023</td>
          <td className="d-none d-xl-table-cell text-right">1265</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            27.23%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:06:25</td>
        </tr>
        <tr>
          <td>Bing</td>
          <td className="text-right">504</td>
          <td className="d-none d-xl-table-cell text-right">623</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            66.76%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:04:42</td>
        </tr>
        <tr>
          <td>Twitter</td>
          <td className="text-right">462</td>
          <td className="d-none d-xl-table-cell text-right">571</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            31.53%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:08:05</td>
        </tr>
        <tr>
          <td>Pinterest</td>
          <td className="text-right">623</td>
          <td className="d-none d-xl-table-cell text-right">770</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            52.81%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:03:10</td>
        </tr>
        <tr>
          <td>Facebook</td>
          <td className="text-right">812</td>
          <td className="d-none d-xl-table-cell text-right">1003</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            24.83%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:05:56</td>
        </tr>
        <tr>
          <td>DuckDuckGo</td>
          <td className="text-right">693</td>
          <td className="d-none d-xl-table-cell text-right">856</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            37.36%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:09:12</td>
        </tr>
        <tr>
          <td>GitHub</td>
          <td className="text-right">713</td>
          <td className="d-none d-xl-table-cell text-right">881</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            38.09%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:06:19</td>
        </tr>
        <tr>
          <td>Instagram</td>
          <td className="text-right">412</td>
          <td className="d-none d-xl-table-cell text-right">508</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            17.09%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:04:23</td>
        </tr>
        <tr>
          <td>Direct</td>
          <td className="text-right">872</td>
          <td className="d-none d-xl-table-cell text-right">1077</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            32.70%
          </td>
          <td className="d-none d-xl-table-cell text-right">00:09:18</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Traffic;
