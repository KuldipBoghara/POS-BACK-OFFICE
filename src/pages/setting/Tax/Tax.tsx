import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';

import DataTable from './DataTable';

const Setting = () => {
  const data = [
    {
      title: 'Cat fds',
      tax_value: '7%',
      default_selected: 'true',
      status: 'Active'
    },
    {
      title: 'Cat ab',
      tax_value: '15%',
      default_selected: 'true',
      status: 'Active'
    }
  ];

  return (
    <Panel
      header={
        <>
          <h3 className="title">Tax</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Setting</Breadcrumb.Item>
            <Breadcrumb.Item active>Tax</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <DataTable data={data} />
    </Panel>
  );
};

export default Setting;
