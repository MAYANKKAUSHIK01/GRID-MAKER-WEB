
import React, { useMemo, useState } from 'react';
import { GridColumn, GridRow, GridSort } from '../types/grid';
import { HeaderRow } from './HeaderRow';
import { Body } from './Body';

type Props<T> = {
  columns: GridColumn<T>[];
  rows: GridRow<T>[];
  height: number;
  rowHeight: number;
};

export function DataGrid<T>({ columns, rows, height, rowHeight }: Props<T>) {
  const [sort, setSort] = useState<GridSort[]>([]);

  const sorted = useMemo(() => {
    if (!sort.length) return rows;
    return [...rows].sort((a, b) => {
      for (const s of sort) {
        const av = (a.data as any)[s.columnId];
        const bv = (b.data as any)[s.columnId];
        if (av === bv) continue;
        return s.direction === 'asc' ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1);
      }
      return 0;
    });
  }, [rows, sort]);

  return (
    <div role="grid" style={{ height }}>
      <HeaderRow columns={columns} sort={sort} setSort={setSort} />
      <Body columns={columns} rows={sorted} height={height} rowHeight={rowHeight} />
    </div>
  );
}
