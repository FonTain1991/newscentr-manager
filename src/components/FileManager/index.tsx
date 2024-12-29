import { Modal } from 'antd'
import { memo, useEffect } from 'react'
import { FileManagerTabs } from './FileManagerTabs'
import { Header } from './Header'
import { folderIdVar } from '@/apollo/vars'
import { useFileManager } from './FileManagerContext'

export const FileManager = memo(() => {
  const { closeDialog } = useFileManager()
  useEffect(() => {
    folderIdVar(null)
  }, [])

  return (
    <Modal
      open
      onCancel={closeDialog}
      centered
      className='!w-1/2'
      footer={null}
      closable={false}
      getContainer='#filesManager'
    >
      <Header />
      <FileManagerTabs />
    </Modal>
  )
})