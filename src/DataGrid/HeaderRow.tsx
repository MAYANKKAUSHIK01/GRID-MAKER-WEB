
import React from 'react';
import { GridColumn, GridSort } from '../types/grid';

export function HeaderRow<T>({
  columns,
  sort,
  setSort
}: {
  columns: GridColumn<T>[];
  sort: GridSort[];
  setSort: React.Dispatch<React.SetStateAction<GridSort[]>>;
}) {
  function toggle(id: string) {
    setSort(prev => {
      const s = prev.find(p => p.columnId === id);
      if (!s) return [...prev, { columnId: id, direction: 'asc' }];
      if (s.direction === 'asc')
        return prev.map(p => p.columnId === id ? { ...p, direction: 'desc' } : p);
      return prev.filter(p => p.columnId !== id);
    });
  }

  return (
    <div role="row" style={{ display: 'flex' }}>
      {columns.map(c => (
        <div
          key={c.id}
          role="columnheader"
          aria-sort={sort.find(s => s.columnId === c.id)?.direction ?? 'none'}
          style={{ width: c.width, cursor: 'pointer' }}
          onClick={() => c.sortable && toggle(c.id)}
        >
          {c.title}
        </div>
      ))}
    </div>
  );
}
