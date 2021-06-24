import React from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class ReactSelect extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle tag="h5">React Select</CardTitle>
          <h6 className="card-subtitle text-muted">
            Select Component by react-select
          </h6>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="6">
              <FormGroup>
                <Label>Single Select</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                />
              </FormGroup>
              <FormGroup>
                <Label>Multi Select</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                  isMulti
                />
              </FormGroup>
              <FormGroup>
                <Label>Searchable Select</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                  isSearchable
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <Label>Clearable Select</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                  isClearable
                />
              </FormGroup>
              <FormGroup>
                <Label>Loading Select</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                  isLoading
                />
              </FormGroup>
              <FormGroup>
                <Label>Disabled Select</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                  isDisabled
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

const InputMasks = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Input Masks</CardTitle>
      <h6 className="card-subtitle text-muted">
        Input masks by react-input-mask
      </h6>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg="6">
          <FormGroup>
            <Label>Date</Label>
            <InputMask mask="99/99/9999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "DD/MM/YYYY"</span>
          </FormGroup>

          <FormGroup>
            <Label>Hour</Label>
            <InputMask mask="99:99:9999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "HH:MM:SS"</span>
          </FormGroup>

          <FormGroup>
            <Label>Date & Hour</Label>
            <InputMask mask="99/99/9999 99:99:99">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
          </FormGroup>

          <FormGroup>
            <Label>ZIP Code</Label>
            <InputMask mask="99999-999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
          </FormGroup>

          <FormGroup>
            <Label>ZIP Code</Label>
            <InputMask mask="9-99-99-99">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "x-xx-xx-xx"</span>
          </FormGroup>

          <FormGroup>
            <Label>Money</Label>
            <InputMask mask="999.999.999.999.999,99">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "Your money"</span>
          </FormGroup>

          <FormGroup>
            <Label>Money 2</Label>
            <InputMask mask="9.999,99">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "x.xxx,xx"</span>
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <Label>Telephone</Label>
            <InputMask mask="9999-9999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xxxx-xxxx"</span>
          </FormGroup>

          <FormGroup>
            <Label>Telephone with Code Area</Label>
            <InputMask mask="(99) 9999-9999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "(xx) xxxx-xxxx"</span>
          </FormGroup>

          <FormGroup>
            <Label>US Telephone</Label>
            <InputMask mask="(999) 999-9999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "(xxx) xxx-xxxx"</span>
          </FormGroup>

          <FormGroup>
            <Label>São Paulo Celphones</Label>
            <InputMask mask="(99) 99999-9999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "(xx) xxxxx-xxxx"</span>
          </FormGroup>

          <FormGroup>
            <Label>CPF</Label>
            <InputMask mask="999.999.999-99">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xxx.xxx.xxxx-xx"</span>
          </FormGroup>

          <FormGroup>
            <Label>CNPJ</Label>
            <InputMask mask="99.999.999/9999-99">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xx.xxx.xxx/xxxx-xx"</span>
          </FormGroup>

          <FormGroup>
            <Label>IP Address</Label>
            <InputMask mask="999.999.999.999">
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xxx.xxx.xxx.xxx"</span>
          </FormGroup>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

const AdvancedInputs = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Advanced Elements</h1>

    <ReactSelect />
    <InputMasks />
  </Container>
);

export default AdvancedInputs;
