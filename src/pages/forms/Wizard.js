import React from "react";

import { Container, Row, Col } from "reactstrap";

import jQuery from "jquery";
const $ = jQuery;
window.jQuery = jQuery;

require("smartwizard/dist/js/jquery.smartWizard.min.js");

class WizardVariant extends React.Component {
  componentDidMount() {
    $(this.refs.smartwizard)
      .smartWizard({
        theme: this.props.variant, // default OR arrows
        showStepURLhash: false,
        toolbarSettings: {
          toolbarExtraButtons: [
            $(
              '<button class="btn btn-submit btn-primary" type="button">Finish</button>'
            )
          ]
        }
      })
      .on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        if (stepDirection === "forward") {
          // Validation between steps
        }
        return true;
      });

    $(this.refs.smartwizard)
      .find(".btn-submit")
      .on("click", function() {
        alert("Great! The form is ready to submit.");
        // Final validation

        return false;
      });
  }
  render = () => {
    const { color } = this.props;

    return (
      <div ref="smartwizard" className={`wizard wizard-${color} mb-4`}>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href={`#step-1`}>
              First Step
              <br />
              <small>Step description</small>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={`#step-2`}>
              Second Step
              <br />
              <small>Step description</small>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={`#step-3`}>
              Third Step
              <br />
              <small>Step description</small>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={`#step-4`}>
              Fourth Step
              <br />
              <small>Step description</small>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div id={`step-1`} class="tab-pane" role="tabpanel">Step Content 1</div>
          <div id={`step-2`} class="tab-pane" role="tabpanel">Step Content 2</div>
          <div id={`step-3`} class="tab-pane" role="tabpanel">Step Content 3</div>
          <div id={`step-4`} class="tab-pane" role="tabpanel">Step Content 4</div>
        </div>
      </div>
    );
  };
}

const Wizard = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Wizard</h1>

    <Row>
      <Col xs="12" className="col-xxl-6">
        <WizardVariant variant="default" color="primary" />
        <WizardVariant variant="default" color="success" />
        <WizardVariant variant="default" color="danger" />
      </Col>
      <Col xs="12" className="col-xxl-6">
        <WizardVariant variant="arrows" color="primary" />
        <WizardVariant variant="arrows" color="success" />
        <WizardVariant variant="arrows" color="danger" />
      </Col>
    </Row>
  </Container>
);

export default Wizard;
