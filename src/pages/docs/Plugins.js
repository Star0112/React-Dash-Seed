import React from "react";
import { Col, Container, Row, Table } from "reactstrap";

const Plugins = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg={10} xl={8} className="mx-auto">
        <h1 className="h3">Plugins</h1>
        <hr className="my-4" />
        <p className="mb-4 text-lg">
          This template comes with multiple plugins for the demo pages,
          here is the list with the official documentation/website for
          each one.
        </p>

        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Documentation / Website</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Bootstrap</td>
              <td>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://getbootstrap.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>React</td>
              <td>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://reactjs.org/
                </a>
              </td>
            </tr>
            <tr>
              <td>Redux</td>
              <td>
                <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://redux.js.org/
                </a>
              </td>
            </tr>
            <tr>
              <td>Reactstrap</td>
              <td>
                <a
                  href="https://reactstrap.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://reactstrap.github.io/
                </a>
              </td>
            </tr>
            <tr>
              <td>jQuery</td>
              <td>
                <a
                  href="https://jquery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jquery.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>Chart.js</td>
              <td>
                <a
                  href="https://www.chartjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.chartjs.org/
                </a>
              </td>
            </tr>
            <tr>
              <td>ApexCharts</td>
              <td>
                <a
                  href="https://apexcharts.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://apexcharts.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>Quill</td>
              <td>
                <a
                  href="https://quilljs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://quilljs.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>Google Maps</td>
              <td>
                <a
                  href="https://developers.google.com/maps/documentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developers.google.com/maps/documentation/
                </a>
              </td>
            </tr>
            <tr>
              <td>Dragula</td>
              <td>
                <a
                  href="https://bevacqua.github.io/dragula/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://bevacqua.github.io/dragula/
                </a>
              </td>
            </tr>
            <tr>
              <td>Feather Icons</td>
              <td>
                <a
                  href="https://feathericons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://feathericons.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>Font Awesome</td>
              <td>
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://fontawesome.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>FullCalendar</td>
              <td>
                <a
                  href="https://fullcalendar.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://fullcalendar.io/
                </a>
              </td>
            </tr>
            <tr>
              <td>jVectorMap</td>
              <td>
                <a
                  href="http://jvectormap.com/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://jvectormap.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>Perfect Scrollbar</td>
              <td>
                <a
                  href="https://github.com/mdbootstrap/perfect-scrollbar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/mdbootstrap/perfect-scrollbar
                </a>
              </td>
            </tr>
            <tr>
              <td>React Redux Toastr</td>
              <td>
                <a
                  href="https://github.com/diegoddox/react-redux-toastr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/diegoddox/react-redux-toastr
                </a>
              </td>
            </tr>
            <tr>
              <td>React Boostrap Table2</td>
              <td>
                <a
                  href="https://github.com/react-bootstrap-table/react-bootstrap-table2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/react-bootstrap-table/react-bootstrap-table2
                </a>
              </td>
            </tr>
            <tr>
              <td>React Input Mask</td>
              <td>
                <a
                  href="https://github.com/sanniassin/react-input-mask"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/sanniassin/react-input-mask
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default Plugins;
