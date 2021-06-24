import React from "react";

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox
} from "availity-reactstrap-validation";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Button,
  Label,
  FormGroup,
  CustomInput
} from "reactstrap";

const Validation = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Validation</h1>

    <Card>
      <CardHeader>
        <CardTitle tag="h5">Availity Validation</CardTitle>
        <h6 className="card-subtitle text-muted">
          Form validation by availity-reactstrap-validation
        </h6>
      </CardHeader>
      <CardBody>
        <AvForm>
          {/* With AvField */}
          <AvField name="name" label="Name" required />
          {/* With AvGroup AvInput and AvFeedback to build your own */}
          <AvGroup>
            <Label for="example">Rank</Label>
            <AvInput name="rank" id="example" required />
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>

          <hr />

          {/* Radios */}

          <h4>Radio Buttons</h4>
          <AvRadioGroup name="radioExample" required errorMessage="Pick one!">
            <AvRadio label="Bulbasaur" value="Bulbasaur" />
            <AvRadio label="Squirtle" value="Squirtle" />
            <AvRadio label="Charmander" value="Charmander" />
            <AvRadio label="Pikachu" value="Pikachu" disabled />
          </AvRadioGroup>

          <h4>Inline Radio Buttons</h4>
          <AvRadioGroup inline name="radioExample2" required>
            <AvRadio label="Bulbasaur" value="Bulbasaur" />
            <AvRadio label="Squirtle" value="Squirtle" />
            <AvRadio label="Charmander" value="Charmander" />
            <AvRadio label="Pikachu" value="Pikachu" disabled />
          </AvRadioGroup>

          <h4>Custom Radio Buttons</h4>
          <AvRadioGroup name="radioCustomInputExample" required>
            <AvRadio customInput label="Bulbasaur" value="Bulbasaur" />
            <AvRadio customInput label="Squirtle" value="Squirtle" />
            <AvRadio customInput label="Charmander" value="Charmander" />
            <AvRadio customInput label="Pikachu" value="Pikachu" disabled />
          </AvRadioGroup>

          <h4>Custom Inline Radio Buttons</h4>
          <AvRadioGroup inline name="radioCustomInputExample2" required>
            <AvRadio customInput label="Bulbasaur" value="Bulbasaur" />
            <AvRadio customInput label="Squirtle" value="Squirtle" />
            <AvRadio customInput label="Charmander" value="Charmander" />
            <AvRadio customInput label="Pikachu" value="Pikachu" disabled />
          </AvRadioGroup>

          <hr />

          {/* checkboxes */}
          <h4>Checkboxes</h4>
          <AvCheckboxGroup name="checkboxExample" required>
            <AvCheckbox label="Bulbasaur" value="Bulbasaur" />
            <AvCheckbox label="Squirtle" value="Squirtle" />
            <AvCheckbox label="Charmander" value="Charmander" />
            <AvCheckbox label="Pikachu" value="Pikachu" disabled />
          </AvCheckboxGroup>

          <h4>Inline Checkboxes</h4>
          <AvCheckboxGroup inline name="checkboxExample2" required>
            <AvCheckbox label="Bulbasaur" value="Bulbasaur" />
            <AvCheckbox label="Squirtle" value="Squirtle" />
            <AvCheckbox label="Charmander" value="Charmander" />
            <AvCheckbox label="Pikachu" value="Pikachu" disabled />
          </AvCheckboxGroup>

          <h4>Custom Checkboxes</h4>
          <AvCheckboxGroup name="checkboxCustomInputExample" required>
            <AvCheckbox customInput label="Bulbasaur" value="Bulbasaur" />
            <AvCheckbox customInput label="Squirtle" value="Squirtle" />
            <AvCheckbox customInput label="Charmander" value="Charmander" />
            <AvCheckbox customInput label="Pikachu" value="Pikachu" disabled />
          </AvCheckboxGroup>

          <h4>Custom Inline Checkboxes</h4>
          <AvCheckboxGroup inline name="checkboxCustomInputExample2" required>
            <AvCheckbox customInput label="Bulbasaur" value="Bulbasaur" />
            <AvCheckbox customInput label="Squirtle" value="Squirtle" />
            <AvCheckbox customInput label="Charmander" value="Charmander" />
            <AvCheckbox customInput label="Pikachu" value="Pikachu" disabled />
          </AvCheckboxGroup>

          <hr />

          {/* With select and AvField */}
          <AvField
            type="select"
            name="select"
            label="Option"
            helpMessage="Idk, this is an example. Deal with it!"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </AvField>

          <AvField
            type="select"
            name="select-multiple"
            label="Option"
            helpMessage="MULTIPLE!"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </AvField>

          <FormGroup>
            <AvGroup check>
              <AvInput type="checkbox" name="checkbox" />
              <Label check for="checkbox">
                {" "}
                Check it out
              </Label>
            </AvGroup>

            <AvField
              type="checkbox"
              name="avFieldCheckbox"
              label="Check out this AvField checkbox"
              required
            />

            <AvInput
              tag={CustomInput}
              type="checkbox"
              name="customCheckbox"
              label="Check out this custom input checkbox"
              required
            />

            <AvField
              tag={CustomInput}
              type="checkbox"
              name="customCheckbox1"
              label="Check out this custom input checkbox from AvField"
              required
            />
          </FormGroup>

          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </AvForm>
      </CardBody>
    </Card>
  </Container>
);

export default Validation;
