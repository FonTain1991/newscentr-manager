import { useCallback, useEffect, useRef } from 'react'

interface IUseDebounce {
  (...args: any[]): any
}
export const useDebounce: IUseDebounce = (fn, delay = 300) => {
  const ref = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => clearTimeout(ref.current)
  }, [])

  return useCallback((...args: any[]) => {
    clearTimeout(ref.current)
    ref.current = setTimeout(fn, delay, ...args)
  }, [fn, delay])
}