import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';

import DataTable from './DataTable';

const Department = () => {
  /*   const columns = [
    { key: 'name', label: 'Name', flexGrow: 2, sortable: true },
    { key: 'surcharge', label: 'Surcharge', flexGrow: 1, sortable: true },
    { key: 'age', label: 'Age', flexGrow: 1, sortable: true },
    { key: 'tax', label: 'Tax', flexGrow: 1, sortable: true },
    { key: 'shortcut', label: 'Shortcut', flexGrow: 1, sortable: true },
    { key: 'foodStamp', label: 'Food Stamp', flexGrow: 1, sortable: true },
    { key: 'actions', label: 'Actions', flexGrow: 1 }
  ]; */
  const data = [
    {
      name: 'soda',
      surcharge: 0,
      age: 21,
      tax: 'Tax 1',
      shortcut: 'No',
      foodStamp: 'No'
    },
    {
      name: 'Dept 1',
      surcharge: 5,
      age: 19,
      tax: 'Tax 2',
      shortcut: 'No',
      foodStamp: 'No'
    }
  ];

  return (
    <Panel
      header={
        <>
          <h3 className="title">Department</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Item Management</Breadcrumb.Item>
            <Breadcrumb.Item active>Department</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <DataTable data={data} />
    </Panel>
  );
};

export default Department;
