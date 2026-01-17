
import React from 'react';
import type { Meta } from '@storybook/react';
import { DataGrid } from '../DataGrid/DataGrid';

export default {
  title: 'AdvancedDataGrid',
  component: DataGrid
} as Meta;

const columns = [
  { id: 'id', title: 'ID', width: 80, sortable: true, render: (r: any) => r.id },
  { id: 'name', title: 'Name', width: 160, sortable: true, render: (r: any) => r.name }
];

const rows = Array.from({ length: 50000 }).map((_, i) => ({
  id: String(i),
  data: { id: i, name: 'Row ' + i }
}));

export const FiftyThousandRows = () => (
  <DataGrid columns={columns} rows={rows} height={400} rowHeight={32} />
);
