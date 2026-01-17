
import React from 'react';
export type SortDirection = 'asc' | 'desc';
export type GridSort = { columnId: string; direction: SortDirection; };
export type GridColumn<T> = {
  id: string;
  title: string;
  width: number;
  pinned?: 'left' | 'right';
  sortable?: boolean;
  visible?: boolean;
  render: (row: T) => React.ReactNode;
  editor?: (value: unknown, row: T, onChange: (v: unknown) => void) => React.ReactNode;
  validate?: (value: unknown, row: T) => Promise<void>;
};
export type GridRow<T> = { id: string; data: T; };
