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
    to: '/home/department',
    children: [
      {
        eventKey: 'department',
        title: 'Department',
        to: '/home/department'
      },
      {
        eventKey: 'category',
        title: 'Category',
        to: '/home/category'
      },
      {
        eventKey: 'sub-category',
        title: 'Sub Category',
        to: '/home/subcategory'
      },
      {
        eventKey: 'items',
        title: 'Items',
        to: '/home/items'
      },
      {
        eventKey: 'item-group',
        title: 'Item Group',
        to: '/home/itemgroup'
      }
    ]
  },
  {
    eventKey: 'setting',
    icon: <Icon as={MdModeEditOutline} />,
    title: 'Setting',
    to: '/home/setting'
  }
];
