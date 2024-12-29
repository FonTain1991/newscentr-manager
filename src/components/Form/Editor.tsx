import { ApolloProvider } from '@/apollo'
import { createRoot } from 'react-dom/client'
import { FileManager } from '../FileManager'
import { FileManagerProvider } from '../FileManager/FileManagerContext'

export const mediaLibraryPlugin = ({ editor }: { editor: any }) => {
  editor.ui.registry.addButton('medialibrary', {
    text: 'Media Library',
    icon: 'gallery',
    onAction: () => {
      const container = document.getElementById('filesManager')
      if (!container) {
        return
      }

      const root = createRoot(container)
      const closeDialog = () => {
        root.unmount()
      }
      root.render((
        <ApolloProvider>
          <FileManagerProvider value={{ editor, closeDialog }}>
            <FileManager />
          </FileManagerProvider>
        </ApolloProvider>
      ))
    },
  })
}