
import React, { useRef, useState } from 'react';
import { GridColumn, GridRow } from '../types/grid';
import { useRowVirtualizer } from '../hooks/useRowVirtualizer';
import { rafThrottle } from '../utils/rafThrottle';

export function Body<T>({
  columns,
  rows,
  height,
  rowHeight
}: {
  columns: GridColumn<T>[];
  rows: GridRow<T>[];
  height: number;
  rowHeight: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = rafThrottle(() => {
    if (ref.current) setScrollTop(ref.current.scrollTop);
  });

  const v = useRowVirtualizer(rows.length, rowHeight, height, scrollTop);

  return (
    <div ref={ref} onScroll={onScroll} style={{ overflow: 'auto', height }}>
      <div style={{ height: v.totalHeight }}>
        <div style={{ transform: `translateY(${v.offsetTop}px)` }}>
          {rows.slice(v.from, v.to).map(r => (
            <div key={r.id} role="row" style={{ display: 'flex', height: rowHeight }}>
              {columns.map(c => (
                <div key={c.id} role="gridcell" style={{ width: c.width }}>
                  {c.render(r.data)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
