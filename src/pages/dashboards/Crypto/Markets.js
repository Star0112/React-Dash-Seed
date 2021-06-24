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

const Markets = () => (
  <Card className="flex-fill">
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
      <CardTitle tag="h5" className="mb-0">Markets</CardTitle>
    </CardHeader>
    <Table size="sm" striped className="my-0">
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th className="d-none d-xl-table-cell">Volume</th>
          <th className="d-none d-xl-table-cell">Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ETH</td>
          <td className="text-right">0.03863405</td>
          <td className="d-none d-xl-table-cell text-right">1379.634</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +1.52
          </td>
        </tr>
        <tr>
          <td>XRP</td>
          <td className="text-right">0.00009313</td>
          <td className="d-none d-xl-table-cell text-right">270.805</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            -3.30
          </td>
        </tr>
        <tr>
          <td>XMR</td>
          <td className="text-right">0.01292315</td>
          <td className="d-none d-xl-table-cell text-right">203.531</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +6.10
          </td>
        </tr>
        <tr>
          <td>DASH</td>
          <td className="text-right">0.02088992</td>
          <td className="d-none d-xl-table-cell text-right">84.034</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            -3.17
          </td>
        </tr>
        <tr>
          <td>LTC</td>
          <td className="text-right">0.00821501</td>
          <td className="d-none d-xl-table-cell text-right">80.566</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +3.00
          </td>
        </tr>
        <tr>
          <td>STR</td>
          <td className="text-right">0.00002948</td>
          <td className="d-none d-xl-table-cell text-right">58.981</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +2.58
          </td>
        </tr>
        <tr>
          <td>DOGE</td>
          <td className="text-right">0.00000061</td>
          <td className="d-none d-xl-table-cell text-right">46.849</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            -1.61
          </td>
        </tr>
        <tr>
          <td>REP</td>
          <td className="text-right">0.00223510</td>
          <td className="d-none d-xl-table-cell text-right">37.038</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +0.54
          </td>
        </tr>
        <tr>
          <td>EOS</td>
          <td className="text-right">0.00069000</td>
          <td className="d-none d-xl-table-cell text-right">35.040</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            -5.84
          </td>
        </tr>
        <tr>
          <td>DGB</td>
          <td className="text-right">0.00000277</td>
          <td className="d-none d-xl-table-cell text-right">34.840</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +0.36
          </td>
        </tr>
        <tr>
          <td>ZEC</td>
          <td className="text-right">0.01505000</td>
          <td className="d-none d-xl-table-cell text-right">32.326</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            -4.24
          </td>
        </tr>
        <tr>
          <td>BURST</td>
          <td className="text-right">0.00000098</td>
          <td className="d-none d-xl-table-cell text-right">25.590</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            -15.52
          </td>
        </tr>
        <tr>
          <td>MAID</td>
          <td className="text-right">0.00003724</td>
          <td className="d-none d-xl-table-cell text-right">20.556</td>
          <td className="d-none d-xl-table-cell text-right text-danger">
            -2.33
          </td>
        </tr>
        <tr>
          <td>ETC</td>
          <td className="text-right">0.00132249</td>
          <td className="d-none d-xl-table-cell text-right">19.633</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +4.19
          </td>
        </tr>
        <tr>
          <td>STRAT</td>
          <td className="text-right">0.00028587</td>
          <td className="d-none d-xl-table-cell text-right">17.557</td>
          <td className="d-none d-xl-table-cell text-right text-success">
            +4.40
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Markets;
