import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';

import DataTable from './DataTable';
const Category = () => {
  const data = [
    {
      category: 'Cat ab',
      department: 'Dept 1',
      sub_category: 0,
      Status: 'Active'
    },
    {
      category: 'Cat fds',
      department: 'Dept 1',
      sub_category: 1,
      Status: 'Active'
    },
    {
      category: 'Cat fdsf',
      department: 'Dept 1',
      sub_category: 1,
      Status: 'Active'
    },
    {
      category: 'Cat fsf',
      department: 'Dept 1',
      sub_category: 0,
      Status: 'Active'
    },
    {
      category: 'Cat wer',
      department: 'Dept 1',
      sub_category: 1,
      Status: 'Active'
    },
    {
      category: 'Cat sfs',
      department: 'Dept 1',
      sub_category: 0,
      Status: 'Active'
    }
  ];

  return (
    <Panel
      header={
        <>
          <h3 className="title">Category</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>category</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <DataTable data={data} />
    </Panel>
  );
};

export default Category;
