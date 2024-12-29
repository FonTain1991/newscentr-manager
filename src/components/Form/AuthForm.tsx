'use client'

import { USER_NOT_FOUND } from '@/constants/errors'
import { useSignInMutation } from '@/gql/signIn'
import { useEvent } from '@/hooks/useEvent'
import { Button, Form, Input, notification } from 'antd'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'

type FieldType = {
  email?: string;
  password?: string;
}

export const AuthForm = memo(() => {
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  const [clientReady, setClientReady] = useState<boolean>(false)
  const [signIn, { loading }] = useSignInMutation()

  const onFinish = useEvent(async variables => {
    try {
      console.log(variables)
      const { data } = await signIn({ variables })
      if (data?.signIn) {
        location.replace('/dashboard')
      }
    } catch (error) {
      if (error instanceof Error && error?.message === USER_NOT_FOUND) {
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
      <p className='text-sm font-medium text-neutral-400 mt-2'>Авторизируйтесь введя свой логин и пароль</p>
      <Form
        form={form}
        className='!mt-[52px] w-full'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        {contextHolder}
        <Form.Item<FieldType>
          name='email'
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <div>
            <div className='text-xs font-semibold mb-1'>Логин</div>
            <Input className='h-10 text-sm font-normal' placeholder='Введите логин...' />
          </div>
        </Form.Item>
        <Form.Item<FieldType>
          name='password'
          className='!mb-0'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <div>
            <div className='text-xs font-semibold mb-1'>Пароль</div>
            <Input.Password className='h-10 text-sm font-normal' placeholder='Введите пароль...' />
          </div>
        </Form.Item>
        <Form.Item className='flex justify-end' >
          <Link
            href='/auth/recovery'
            className='!underline text-xs font-semibold'
          >Забыли пароль?</Link>
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              loading={loading}
              type='primary'
              htmlType='submit'
              className='w-full !h-10 !text-base !font-normal'
              disabled={
                !clientReady ||
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              Войти
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  )
})