'use client'

import { CreatePostDocument } from '@/gql/createPost'
import { UpdatePostDocument } from '@/gql/updatePost'
import { useEvent } from '@/hooks/useEvent'
import { useGetPostById } from '@/hooks/useGetPostById'
import { useMutation } from '@apollo/client'
import { Button, Form, notification } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useEffect } from 'react'
import { ContentCard } from '../Layout'
import { TabForm } from './TabForm'

export const PostForm = memo(() => {
  const router = useRouter()
  const [form] = Form.useForm()
  const post = useGetPostById()
  const [action, { loading }] = useMutation(post?.id ? UpdatePostDocument : CreatePostDocument, {
    refetchQueries: ['getPost'],
    awaitRefetchQueries: true
  })

  const onFinish = useEvent(async post => {
    try {
      await action({
        variables: { post }
      })

      notification.success({
        message: 'Внимание',
        description: 'Пост успешно сохранен.',
        placement: 'topRight'
      })
      if (!post?.id) {
        router.push('/posts')
      }
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
    if (post && form) {
      form.setFieldsValue(post)
    }
  }, [post, form])

  return (
    <ContentCard
      title={post?.id ? 'Обновление поста' : 'Создание поста'}
      rightSection={(
        <Button
          loading={loading}
          disabled={loading}
          type='primary'
          children={post?.id ? 'Сохранить пост' : 'Добавить пост'}
          onClick={form.submit}
        />
      )}
    >
      <Form
        layout='vertical'
        form={form}
        requiredMark={false}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item name='id' noStyle />
        <TabForm />
      </Form>
    </ContentCard>
  )
})