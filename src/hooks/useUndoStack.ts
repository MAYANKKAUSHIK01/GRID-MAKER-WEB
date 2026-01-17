
import { useRef } from 'react';

export function useUndoStack<T>() {
  const stack = useRef<T[]>([]);
  const index = useRef(-1);

  function push(v: T) {
    stack.current = stack.current.slice(0, index.current + 1);
    stack.current.push(v);
    index.current++;
  }

  function undo(): T | null {
    if (index.current <= 0) return null;
    index.current--;
    return stack.current[index.current] ?? null;
  }

  return { push, undo };
}
