import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';

import DataTable from './DataTable';

const SubCategory = () => {
  const data = [
    {
      sub_category: 'Cat ab',
      category: 'Dept 1',
      no_of_items: 0,
      status: 'Active'
    },
    {
      sub_category: 'Cat fds',
      category: 'Dept 1',
      no_of_items: 1,
      status: 'Active'
    },
    {
      sub_category: 'Cat fdsf',
      category: 'Dept 1',
      no_of_items: 1,
      status: 'Active'
    },
    {
      sub_category: 'Cat fsf',
      category: 'Dept 1',
      no_of_items: 0,
      status: 'Active'
    },
    {
      sub_category: 'Cat wer',
      category: 'Dept 1',
      no_of_items: 1,
      status: 'Active'
    },
    {
      sub_category: 'Cat sfs',
      category: 'Dept 1',
      no_of_items: 0,
      status: 'Active'
    }
  ];

  return (
    <Panel
      header={
        <>
          <h3 className="title">Sub Category</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Item Management</Breadcrumb.Item>
            <Breadcrumb.Item active>Sub Category</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <DataTable data={data} />
    </Panel>
  );
};

export default SubCategory;
