import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';

import DataTable from './DataTable';

const Items = () => {
  const data = [
    {
      SKU: 'null',
      Name: 'Beer',
      Size: '250 ML',
      Pack: 'SINGLE',
      Department: 'Dept 1',
      Category: 'null',
      UnitCost: '$0.0',
      SalePrice: '$2.49',
      ItemType: 'standard'
    },
    {
      SKU: 'null',
      Name: 'pepsi',
      Size: '20 OZ',
      Pack: 'SINGLE',
      Department: 'soda',
      Category: 'Cat 1',
      UnitCost: '$0.59',
      SalePrice: '$0.89',
      ItemType: 'standard'
    }
  ];

  return (
    <Panel
      header={
        <>
          <h3 className="title">Items</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Item Management</Breadcrumb.Item>
            <Breadcrumb.Item active>Items</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <DataTable data={data} />
    </Panel>
  );
};

export default Items;
