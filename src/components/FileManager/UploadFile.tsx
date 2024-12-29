import { folderIdVar } from '@/apollo/vars'
import { useEvent } from '@/hooks/useEvent'
import { InboxOutlined } from '@ant-design/icons'
import { useApolloClient, useReactiveVar } from '@apollo/client'
import { message, Upload } from 'antd'
import { memo } from 'react'

const { Dragger } = Upload
export const UploadFile = memo(() => {
  const client = useApolloClient()
  const parentId = useReactiveVar(folderIdVar)

  const onChange = useEvent(info => {
    const { status } = info.file
    if (status === 'done') {
      client.refetchQueries({ include: ['getListByParentId'] }).then(() => {
        message.success(`Файл, ${info.file.name}, успешно загружен.`)
      })
      return
    }
    if (status === 'error') {
      message.error(`Ошибка загрузки файла ${info.file.name} `)
    }
  })

  return (
    <Dragger
      accept='image/*'
      name='file'
      data={{ parentId }}
      multiple={true}
      action='/api/images/upload'
      onChange={onChange}
    >
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>Нажмите или перетащите файл в эту область для загрузки</p>
    </Dragger >
  )
})