import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { memo } from 'react'
import { CreateFolder } from './CreateFolder'
import { useFileManager } from './FileManagerContext'

export const Header = memo(() => {
  const { closeDialog } = useFileManager()
  return (
    <div className='flex justify-between'>
      <div className='font-bold text-2xl'>Файловый менеджер</div>
      <div className='flex gap-x-4'>
        <CreateFolder />
        <Button onClick={closeDialog} >
          <CloseOutlined />
        </Button>
      </div>
    </div>
  )
})