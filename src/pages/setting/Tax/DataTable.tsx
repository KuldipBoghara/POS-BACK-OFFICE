import React, { useState } from 'react';
import { Table, DOMHelper } from 'rsuite';

import DrawerView from './DrawerView';
import { StatusCell } from './Cells';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const DataTable = ({ data }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const filteredData = () => {
    const filtered = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase()
      );
    });

    if (sortColumn && sortType) {
      return filtered.sort((a, b) => {
        const x = a[sortColumn];
        const y = b[sortColumn];

        if (typeof x === 'string' && typeof y === 'string') {
          if (sortType === 'asc') {
            return x.localeCompare(y);
          } else {
            return y.localeCompare(x);
          }
        }

        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return filtered;
  };

  return (
    <>
      <Table
        height={Math.max(getHeight(window) - 200, 400)}
        data={filteredData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
      >
        <Column flexGrow={1} sortable>
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title" />
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>Tax Value (%)</HeaderCell>
          <Cell dataKey="tax_value" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Default Selected</HeaderCell>
          <Cell dataKey="default_selected" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Status</HeaderCell>
          <StatusCell dataKey="status" />
        </Column>

        {/* {columns.map((column) => (
          <Column
            key={column.key}
            flexGrow={column.flexGrow}
            sortable={column.sortable}
          >
            <HeaderCell>{column.label}</HeaderCell>
            {column.key === 'actions' ? (
              <ActionCell dataKey="id" />
            ) : (
              <Cell dataKey={column.key} />
            )}
          </Column>
        ))} */}
      </Table>

      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default DataTable;
