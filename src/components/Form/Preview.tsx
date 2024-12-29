import { useEvent } from '@/hooks/useEvent'
import { memo, useState } from 'react'
import { FileManager } from '../FileManager'
import { FileManagerProvider } from '../FileManager/FileManagerContext'
import { Button } from 'antd'
import Image from 'next/image'
import { API_IMAGE_URL } from '@/constants'

interface IPreview {
  onChange?: (value: string | null, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void,
  value?: string
}

export const Preview = memo(({ value, onChange }: IPreview) => {
  const [show, setShow] = useState(false)
  const onShow = useEvent(() => setShow(true))
  const closeDialog = useEvent(() => setShow(false))

  const onDelete = useEvent(() => {
    if (onChange) {
      onChange(null)
    }
  })

  return (
    <div>
      {value && (
        <div className='w-96 relative rounded-md overflow-hidden mb-4'>
          <Image
            width={500}
            height={500}
            src={API_IMAGE_URL + value}
            objectFit='cover'
            alt='Preview'
          />
        </div>
      )}
      {show && (
        <FileManagerProvider value={{ closeDialog, onChange }}>
          <FileManager />
        </FileManagerProvider>
      )}
      <div className='flex gap-4'>
        <Button
          onClick={onShow}
        >
          {value ? 'Изменить' : 'Добавить'} фото
        </Button>
        {value && (
          <Button
            danger
            onClick={onDelete}
          >
            Удалить фото
          </Button>
        )}
      </div>
    </div>
  )
})