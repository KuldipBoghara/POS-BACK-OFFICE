import React from 'react';
import { IconButton, Table, Toggle } from 'rsuite';
import Edit2Icon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';

const { Cell } = Table;

export const ActionCell = (props) => {
  return (
    <Cell {...props} className="link-group">
      <IconButton icon={<Edit2Icon />} appearance="subtle" />
      <IconButton icon={<TrashIcon />} appearance="subtle" />
    </Cell>
  );
};

export const StatusCell = ({ status }) => {
  return (
    <Cell>
      <Toggle
        size="sm"
        checkedChildren="Open"
        unCheckedChildren="Close"
        checked={status === 'open'}
        defaultChecked
      />
    </Cell>
  );
};
