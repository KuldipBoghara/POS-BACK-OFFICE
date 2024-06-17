import { Icon } from '@rsuite/icons';
import { VscTable } from 'react-icons/vsc';
import { MdDashboard, MdModeEditOutline } from 'react-icons/md';
import React from 'react';

export const appNavs = [
  {
    eventKey: 'dashboard',
    icon: <Icon as={MdDashboard} />,
    title: 'Dashboard',
    to: '/home/dashboard'
  },
  {
    eventKey: 'item-management',
    icon: <Icon as={VscTable} />,
    title: 'Item Management',
    to: '/home/item-management/',
    children: [
      {
        eventKey: 'department',
        title: 'Department',
        to: '/home/item-management/department'
      },
      {
        eventKey: 'category',
        title: 'Category',
        to: '/home/item-management/category'
      },
      {
        eventKey: 'sub-category',
        title: 'Sub Category',
        to: '/home/item-management/subcategory'
      },
      {
        eventKey: 'items',
        title: 'Items',
        to: '/home/item-management/items'
      },
      {
        eventKey: 'item-group',
        title: 'Item Group',
        to: '/home/item-management/itemgroup'
      }
    ]
  },
  {
    eventKey: 'setting',
    icon: <Icon as={MdModeEditOutline} />,
    title: 'Setting',
    to: '/home/setting',
    children: [
      {
        eventKey: 'tax',
        title: 'Tax',
        to: '/home/setting/tax'
      }
    ]
  }
];
