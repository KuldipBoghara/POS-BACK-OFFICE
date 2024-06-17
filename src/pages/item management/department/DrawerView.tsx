import React from 'react';
import {
  Drawer,
  DrawerProps,
  Button,
  Form,
  InputPicker,
  CheckboxGroup,
  Checkbox
} from 'rsuite';

import NumberPicker from '../../../components/NumberPicker';

const DrawerView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;

  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
    'Louisa',
    'Lester',
    'Lola',
    'Lydia',
    'Hal',
    'Hannah',
    'Harriet',
    'Hattie',
    'Hazel',
    'Hilda'
  ].map((item) => ({ label: item, value: item }));

  return (
    <Drawer
      backdrop="static"
      size="sm"
      placement="right"
      onClose={onClose}
      {...rest}
    >
      <Drawer.Header>
        <Drawer.Title>Add a new Department</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={onClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>Name</Form.ControlLabel>
            <Form.Control name="name" />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Surcharge</Form.ControlLabel>
            <Form.Control name="surcharge" type="number" />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Street</Form.ControlLabel>
            <Form.Control name="street" />
          </Form.Group>

          <p>Age</p>
          <div style={{ paddingTop: '5px' }}>
            <NumberPicker />
          </div>

          <p style={{ paddingTop: '20px' }}>Tax</p>
          <div style={{ paddingTop: '5px' }}>
            <InputPicker data={data} style={{ width: 224 }} placeholder="Tax" />
          </div>

          <CheckboxGroup
            inline
            name="checkbox-group"
            style={{ paddingTop: '20px' }}
          >
            <Checkbox value="foodStamp">Food Stamp</Checkbox>
            <Checkbox value="shortcut" style={{ paddingLeft: '50px' }}>
              Shortcut
            </Checkbox>
          </CheckboxGroup>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
