import React, { useState } from 'react';
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

export const StatusCell = (props) => {
  const { rowData } = props;
  const [isChecked, setIsChecked] = useState(rowData.status === 'Active');

  const handleToggleChange = (value) => {
    setIsChecked(value);
    // You can add any additional logic here, such as updating the status in your data source
  };

  return (
    <Cell {...props}>
      <Toggle
        checkedChildren="Active"
        unCheckedChildren="Deactive"
        checked={isChecked}
        onChange={handleToggleChange}
      />
    </Cell>
  );
};
