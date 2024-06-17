import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';

import DataTable from './DataTable';
const Category = () => {
  const data = [
    {
      category: 'Cat ab',
      department: 'Dept 1',
      sub_category: 0,
      status: 'Active'
    },
    {
      category: 'Cat fds',
      department: 'Dept 1',
      sub_category: 1,
      status: 'Active'
    },
    {
      category: 'Cat fdsf',
      department: 'Dept 1',
      sub_category: 1,
      status: 'DeActive'
    },
    {
      category: 'Cat fsf',
      department: 'Dept 1',
      sub_category: 0,
      status: 'Active'
    },
    {
      category: 'Cat wer',
      department: 'Dept 1',
      sub_category: 1,
      status: 'Active'
    },
    {
      category: 'Cat sfs',
      department: 'Dept 1',
      sub_category: 0,
      status: 'Active'
    }
  ];

  return (
    <Panel
      header={
        <>
          <h3 className="title">Category</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Item Management</Breadcrumb.Item>
            <Breadcrumb.Item active>Category</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <DataTable data={data} />
    </Panel>
  );
};

export default Category;
