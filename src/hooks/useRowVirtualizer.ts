
import { useMemo } from 'react';
export function useRowVirtualizer(rowCount: number, rowHeight: number, viewportHeight: number, scrollTop: number) {
  return useMemo(() => {
    const start = Math.floor(scrollTop / rowHeight);
    const visible = Math.ceil(viewportHeight / rowHeight);
    const from = Math.max(0, start - 5);
    const to = Math.min(rowCount, start + visible + 5);
    return { from, to, offsetTop: from * rowHeight, totalHeight: rowCount * rowHeight };
  }, [rowCount, rowHeight, viewportHeight, scrollTop]);
}
