import React from 'react';
import { Drawer, DrawerProps, Button, Form, InputPicker } from 'rsuite';

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
        <Drawer.Title>Add a new Category</Drawer.Title>
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
            <Form.ControlLabel>Category</Form.ControlLabel>
            <Form.Control name="category" placeholder="Enter Category" />
          </Form.Group>

          <p style={{ paddingTop: '20px' }}>Department</p>
          <div style={{ paddingTop: '5px' }}>
            <InputPicker
              data={data}
              style={{ width: 224 }}
              placeholder="Select Department"
            />
          </div>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
