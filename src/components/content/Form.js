import React from "react";
import { Form, Button, InputGroup, FormControl, FormCheck, FormLabel } from "react-bootstrap";
import styled from "styled-components";

const StyledInput = styled(FormControl)`
  padding: 0.5rem;
  height: 45px;
  border-radius: 4px;
  border: none;
`;

const Checkbox = styled(FormCheck)`
  display: flex;
  & .form-check-input {
    background-color: ${prop => prop.theme.primaryColour};
    height: 36px;
    min-width: 36px;
    border: none;
    margin-right: 1rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.secondaryColour};
  width: 100%;
  height: 58px;
  border: none;

  &:hover {
    background-color: ${props => props.theme.primaryColour};
  }
`;

const Label = styled(FormLabel)`
  font-size: 20px;
`;

const InputWeb = styled(InputGroup)`
  & .input-group-text {
    background-color: #c7c7c7;
  }
`;

export default function FormContact() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Label>Name</Label>
        <StyledInput type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Label>Email</Label>
        <StyledInput type="email" />
      </Form.Group>

      <Form.Group className="mb-3 d-md-none">
        <Label>Website</Label>
        <StyledInput type="text" />
      </Form.Group>

      <div className="d-none d-md-block">
        <Label htmlFor="basic-url">Website</Label>
        <InputWeb className="mb-3">
          <InputGroup.Text className="text-white" id="basic-addon3">
            https://
          </InputGroup.Text>
          <StyledInput id="basic-url" aria-describedby="basic-addon3" />
        </InputWeb>
      </div>

      <Form.Group className="mb-3">
        <Label>Message</Label>
        <Form.Control as="textarea" rows={8} />
      </Form.Group>

      <Form.Group className="mb-3 pb-2">
        <Checkbox
          type="checkbox"
          label="Allow us to sell your personal details
          to whomever we want"
          className="align-items-center"
        />
      </Form.Group>

      <StyledButton type="submit">Submit</StyledButton>
    </Form>
  );
}
