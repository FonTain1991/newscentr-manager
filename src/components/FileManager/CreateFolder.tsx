
import { folderIdVar } from '@/apollo/vars'
import { useCreateFolderMutation } from '@/gql/createFolder'
import { useEvent } from '@/hooks/useEvent'
import { FolderAddOutlined } from '@ant-design/icons'
import { useReactiveVar } from '@apollo/client'
import { Button, Form, Input, Modal, notification } from 'antd'
import { memo, useEffect, useState } from 'react'

export const CreateFolder = memo(() => {
  const [form] = Form.useForm()
  const folderId = useReactiveVar(folderIdVar)

  const [createFolderAction, { loading }] = useCreateFolderMutation({
    refetchQueries: ['getListByParentId'],
    awaitRefetchQueries: true
  })

  const [isOpen, setIsOpen] = useState(false)
  const onClick = useEvent(() => setIsOpen(true))
  const onCancel = useEvent(() => {
    setIsOpen(false)
    form.resetFields()
  })

  const onFinish = useEvent(async data => {
    try {
      await createFolderAction({
        variables: {
          folder: data
        }
      })
      notification.success({
        message: 'Внимание',
        description: 'Папка успешна создана',
        placement: 'topRight'
      })
      onCancel()
    } catch (err) {
      if (err instanceof Error) {
        notification.error({
          message: 'Ошибка',
          description: err.message,
          placement: 'topRight'
        })
      }
    }
  })

  useEffect(() => {
    return () => onCancel()
  }, [onCancel])

  useEffect(() => {
    form.setFieldValue('parentId', folderId)
  }, [folderId, form])

  return (
    <>
      <div className='flex items-center cursor-pointer' onClick={onClick}>
        <FolderAddOutlined className='text-2xl' />
        <span className='ml-2'>
          Создать папку
        </span>
      </div>
      <Modal
        open={isOpen}
        centered
        onCancel={onCancel}
        footer={null}
        getContainer='#filesManager'
      >
        <Form
          className='!mt-8'
          layout='vertical'
          form={form}
          requiredMark={false}
          onFinish={onFinish}
        >
          <Form.Item
            initialValue={folderId}
            name='parentId'
            hidden
          >
          </Form.Item>
          <Form.Item
            label='Название папки'
            name='name'
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input className='!mt-2' placeholder='Введите название папки' />
          </Form.Item>
          <Form.Item className='flex justify-center !mb-0'>
            <Button
              loading={loading}
              disabled={loading}
              type='primary'
              htmlType='submit'
            >
              Создать
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
})