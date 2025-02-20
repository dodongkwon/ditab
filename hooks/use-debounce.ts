import { useEffect, useCallback } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      const timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);

      clearTimeout(timeoutId);
    },
    [callback, delay]
  );

  return debouncedCallback;
} 