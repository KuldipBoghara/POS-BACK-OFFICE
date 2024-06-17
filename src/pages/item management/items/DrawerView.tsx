import React from 'react';
import { Drawer, DrawerProps, Button } from 'rsuite';
import ItemForm from './ItemForm';

const DrawerView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;

  return (
    <Drawer
      backdrop="static"
      size="full"
      placement="right"
      onClose={onClose}
      {...rest}
    >
      <Drawer.Header>
        <Drawer.Title>Add a new Item</Drawer.Title>
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
        <ItemForm />
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
