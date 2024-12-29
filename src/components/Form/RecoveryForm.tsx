'use client'

import { USER_NOT_FOUND } from '@/constants/errors'
import { useRecoveryPasswordMutation } from '@/gql/recoveryPassword'
import { useEvent } from '@/hooks/useEvent'
import { Alert, Button, Form, Input, notification } from 'antd'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'

type FieldType = {
  email?: string;
}

export const RecoveryForm = memo(() => {
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  const [showInstructions, setShowInstruction] = useState<boolean>(false)
  const [clientReady, setClientReady] = useState<boolean>(false)

  const [recoveryPassword, { loading }] = useRecoveryPasswordMutation()

  const onFinish = useEvent(async variables => {
    try {
      await recoveryPassword({ variables })
      setShowInstruction(true)
    } catch (error) {
      if (error instanceof Error && error.message === USER_NOT_FOUND) {
        api.error({
          message: 'Внимание',
          description: 'Пользователь не найден',
          placement: 'topRight'
        })
      }
    }
  })

  useEffect(() => {
    setClientReady(true)
  }, [])

  return (
    <>
      {contextHolder}
      {!showInstructions && <p className='text-sm font-medium text-neutral-400 mt-2'>Введите почту для восстановления пароля</p>}
      <Form
        form={form}
        className='!mt-[52px] w-full'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        {showInstructions && (
          <Alert
            message='На указанный email были высланы инструкции по восстановлению пароля'
            type='info'
            style={{ marginBottom: 32 }}
          />
        )}
        {!showInstructions && (
          <Form.Item<FieldType>
            name='email'
            rules={[{ required: true, message: 'Введите email' }]}
            className='!mb-0'
          >
            <div>
              <div className='text-xs font-semibold mb-1'>Ваша почта</div>
              <Input className='h-10 text-sm font-normal' placeholder='Ваша почта...' />
            </div>
          </Form.Item>
        )}
        <Form.Item shouldUpdate>
          {() => (
            <>
              {!showInstructions && (
                <Button
                  type='primary'
                  htmlType='submit'
                  className='w-full !h-10 !text-base !font-normal mt-52'
                  loading={loading}
                  disabled={
                    loading ||
                    !clientReady ||
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                  children='Отправить'
                />
              )}
              <Link
                href='/auth/login'
                className='h-10 w-full inline-flex justify-center items-center mt-3 border rounded-md font-normal text-base border-form-color'
              >Отменить</Link>
            </>
          )}
        </Form.Item>
      </Form>
    </>
  )
})