'use client'

import { CreatePostCategoryDocument } from '@/gql/createPostCategory'
import { UpdatePostCategoryDocument } from '@/gql/updatePostCategory'
import { useEvent } from '@/hooks/useEvent'
import { useGetPostCategoryById } from '@/hooks/useGetPostCategoryById'
import { useMutation } from '@apollo/client'
import { Button, Form, notification } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useEffect } from 'react'
import { RenderFormItems } from '../Form/RenderFormItems'
import { ContentCard } from '../Layout'
import { MAIN_FIELDS } from './fields'

export const CategoryFormPost = memo(() => {
  const router = useRouter()
  const postCategory = useGetPostCategoryById()
  const [form] = Form.useForm()

  const [action, { loading }] = useMutation(postCategory?.id ? UpdatePostCategoryDocument : CreatePostCategoryDocument, {
    refetchQueries: ['getPostCategory'],
    awaitRefetchQueries: true
  })


  const onFinish = useEvent(async category => {
    try {
      await action({
        variables: {
          category
        }
      })
      notification.success({
        message: 'Внимание',
        description: 'Рубрика успешна сохранена',
        placement: 'topRight'
      })

      if (!postCategory?.id) {
        router.push('/category-post')
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
    if (postCategory && form) {
      form.setFieldsValue(postCategory)
    }
  }, [postCategory, form])

  return (
    <ContentCard
      title={postCategory?.id ? 'Обновление рубрики' : 'Создание рубрики'}
      rightSection={(
        <Button
          loading={loading}
          disabled={loading}
          type='primary'
          children={postCategory?.id ? 'Сохранить рубрику' : 'Добавить рубрику'}
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
        <RenderFormItems
          fields={MAIN_FIELDS}
          className='!mb-4'
        />
      </Form>
    </ContentCard>
  )
})