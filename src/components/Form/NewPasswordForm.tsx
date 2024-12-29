'use client'

import { useCheckRecoveryTokenQuery } from '@/gql/checkRecoveryToken'
import { useSetNewPasswordMutation } from '@/gql/setNewPassword'
import { useEvent } from '@/hooks/useEvent'
import { Button, Form, Input, notification } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import { InvalidRecoveryToken } from '../Auth/InvalidRecoveryToken'

type FieldType = {
  password?: string;
  password2?: string;
}

export const NewPasswordForm = memo(() => {
  const [form] = Form.useForm()
  const { token } = useParams()
  const { replace } = useRouter()

  const { data, error } = useCheckRecoveryTokenQuery({
    variables: { token: String(token) }
  })

  const [clientReady, setClientReady] = useState(false)

  const [setNewPassword, { loading }] = useSetNewPasswordMutation()

  const onFinish = useEvent(async params => {
    try {
      await setNewPassword({
        variables: {
          ...params,
          token
        }
      })
      notification.success({
        message: 'Пароль успешно изменен.',
        description: 'Войдите под новыми данными.',
        placement: 'topRight'
      })
      replace('/auth/login')
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
    setClientReady(true)
  }, [])

  if (error === undefined && data?.checkRecoveryToken === undefined) {
    return null
  }

  if (error) {
    return <InvalidRecoveryToken />
  }

  return (
    <>
      <p className='text-sm font-medium text-neutral-400 mt-2'>Ваш новый пароль должен отличаться от предыдущих использованных паролей</p>
      <Form
        form={form}
        className='!mt-[52px] w-full'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          name='password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <div>
            <div className='text-xs font-semibold mb-1'>Пароль</div>
            <Input.Password className='h-10 text-sm font-normal' placeholder='Введите пароль...' />
          </div>
        </Form.Item>
        <Form.Item<FieldType>
          name='password2'
          rules={[
            {
              required: true,
              message: 'Введите пароль'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Пароли не равны'))
              },
            }),
          ]}
        >
          <div>
            <div className='text-xs font-semibold mb-1'>Повторите пароль</div>
            <Input.Password className='h-10 text-sm font-normal' placeholder='Повторите пароль...' />
          </div>
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
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
            >
              Обновить
            </Button>
          )}
        </Form.Item>
      </Form >
    </>
  )
})