import React from 'react';
import { Route, Routes } from 'react-router';

import LogIn from './pages/authentication/log in';
import Frame from './components/Frame';
import { appNavs } from './config';
import Dashboard from './pages/dashboard';
import Department from './pages/item management/department';
import Category from './pages/item management/category';
import SubCategory from './pages/item management/sub category';
import Items from './pages/item management/items';
import ItemGroup from './pages/item management/item group';
import Tax from './pages/setting/Tax';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />}></Route>
      <Route path="/home/" element={<Frame navs={appNavs} />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="item-management/department" element={<Department />} />
        <Route path="item-management/category" element={<Category />} />
        <Route path="item-management/subcategory" element={<SubCategory />} />
        <Route path="item-management/items" element={<Items />} />
        <Route path="item-management/itemgroup" element={<ItemGroup />} />
        <Route path="setting/tax" element={<Tax />} />
      </Route>
    </Routes>
  );
}

export default App;
