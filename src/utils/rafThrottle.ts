
export function rafThrottle<T extends (...args: never[]) => void>(fn: T): T {
  let raf: number | null = null;
  return ((...args: never[]) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      fn(...args);
    });
  }) as T;
}
