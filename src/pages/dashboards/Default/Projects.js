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

const Projects = () => (
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
        Latest Projects
      </CardTitle>
    </CardHeader>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xl-table-cell">Start Date</th>
          <th className="d-none d-xl-table-cell">End Date</th>
          <th>Status</th>
          <th className="d-none d-md-table-cell">Assignee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Project Apollo</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Carl Jenkins</td>
        </tr>
        <tr>
          <td>Project Fireball</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="danger">Cancelled</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Hades</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Stacie Hall</td>
        </tr>
        <tr>
          <td>Project Nitro</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="warning">In progress</Badge>
          </td>
          <td className="d-none d-md-table-cell">Carl Jenkins</td>
        </tr>
        <tr>
          <td>Project Phoenix</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Romeo</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Ashley Briggs</td>
        </tr>
        <tr>
          <td>Project Wombat</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="warning">In progress</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Zircon</td>
          <td className="d-none d-xl-table-cell">01/01/2018</td>
          <td className="d-none d-xl-table-cell">31/06/2018</td>
          <td>
            <Badge color="danger">Cancelled</Badge>
          </td>
          <td className="d-none d-md-table-cell">Stacie Hall</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Projects;
