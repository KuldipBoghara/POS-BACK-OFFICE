import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  Table,
  Button,
  DOMHelper,
  Stack,
  Toggle
} from 'rsuite';
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
          Add Category
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
        <Column flexGrow={1} sortable>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="category" />
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>Department</HeaderCell>
          <Cell dataKey="department" />
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>Sub Category</HeaderCell>
          <Cell dataKey="sub_category" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Status</HeaderCell>

          <Cell>
            <Toggle
              checkedChildren="Active"
              unCheckedChildren="Deactive"
              defaultChecked
            />
          </Cell>
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
