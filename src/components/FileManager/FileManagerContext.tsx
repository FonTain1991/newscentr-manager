import { createContext, memo, useContext } from 'react'

interface IFileManagerContext {
  editor?: any
  closeDialog?: () => void,
  onChange?: (value: string) => void
}
const FileManagerContext = createContext<IFileManagerContext>({})

export const FileManagerProvider = memo(({ value, children }: { value: any, children: React.ReactNode }) => {
  return <FileManagerContext.Provider value={value} children={children} />
})

export function useFileManager() {
  return useContext(FileManagerContext)
}