
import React, { useState } from 'react';
import { GridColumn } from '../types/grid';

export function Editor<T>({
  column,
  row,
  value,
  onCommit,
  onCancel
}: {
  column: GridColumn<T>;
  row: T;
  value: unknown;
  onCommit: (v: unknown) => void;
  onCancel: () => void;
}) {
  const [val, setVal] = useState(value);
  const [error, setError] = useState<string | null>(null);

  async function commit() {
    try {
      await column.validate?.(val, row);
      onCommit(val);
    } catch {
      setError('Validation failed');
    }
  }

  return (
    <div>
      {column.editor?.(val, row, setVal)}
      {error && <div role="alert">{error}</div>}
      <button onClick={commit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
