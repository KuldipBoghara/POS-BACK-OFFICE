import React, { useState } from 'react';
import { Input, InputGroup, Table, Button, DOMHelper, Stack } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import DrawerView from './DrawerView';
import { ActionCell } from './Cells';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const DataTable = ({ data }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const filteredData = () => {
    const filtered = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchKeyword.toLowerCase())
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
      <Stack className="table-toolbar" justifyContent="space-between">
        <Button appearance="primary" onClick={() => setShowDrawer(true)}>
          Add Department
        </Button>

        <Stack spacing={6}>
          <InputGroup inside>
            <Input
              placeholder="Search"
              value={searchKeyword}
              onChange={setSearchKeyword}
            />
            <InputGroup.Addon>
              <SearchIcon />
            </InputGroup.Addon>
          </InputGroup>
        </Stack>
      </Stack>

      <Table
        height={Math.max(getHeight(window) - 200, 400)}
        data={filteredData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
      >
        <Column flexGrow={2} sortable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>Surcharge</HeaderCell>
          <Cell dataKey="surcharge" />
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>Tax</HeaderCell>
          <Cell dataKey="tax" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Shortcut</HeaderCell>
          <Cell dataKey="shortcut" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Food Stamp</HeaderCell>
          <Cell dataKey="foodStamp" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Action</HeaderCell>
          <ActionCell dataKey="actions" />
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
