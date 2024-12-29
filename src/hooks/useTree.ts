import { tree } from '@/utils/tree'
import { useMemo } from 'react'

export function useTree({ array, targetKey, foreignKey }: { array: any, targetKey: string, foreignKey: string }) {
  return useMemo(() => {
    if (array === undefined) {
      return []
    }
    return tree({ items: array, targetKey, foreignKey, parent: null })
  }, [array, targetKey, foreignKey])
}