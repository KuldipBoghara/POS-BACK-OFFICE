import React from 'react';
import { IconButton, Table } from 'rsuite';
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
