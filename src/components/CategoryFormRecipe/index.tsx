'use client'

import { CreateRecipeCategoryDocument } from '@/gql/createRecipeCategory'
import { UpdateRecipeCategoryDocument } from '@/gql/updateRecipeCategory'
import { useEvent } from '@/hooks/useEvent'
import { useGetRecipeCategoryById } from '@/hooks/useGetRecipeCategoryById'
import { useMutation } from '@apollo/client'
import { Button, Form, notification } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useEffect } from 'react'
import { RenderFormItems } from '../Form/RenderFormItems'
import { ContentCard } from '../Layout'
import { MAIN_FIELDS } from './fields'

export const CategoryFormRecipe = memo(() => {
  const router = useRouter()
  const recipeCategory = useGetRecipeCategoryById()
  const [form] = Form.useForm()

  const [action, { loading }] = useMutation(recipeCategory?.id ? UpdateRecipeCategoryDocument : CreateRecipeCategoryDocument, {
    refetchQueries: ['getRecipeCategory'],
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
        description: 'Категория успешна сохранена',
        placement: 'topRight'
      })

      if (!recipeCategory?.id) {
        router.push('/category-recipe')
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
    if (recipeCategory && form) {
      form.setFieldsValue(recipeCategory)
    }
  }, [recipeCategory, form])

  return (
    <ContentCard
      title={recipeCategory?.id ? 'Обновление категорию' : 'Создание категорию'}
      rightSection={(
        <Button
          loading={loading}
          disabled={loading}
          type='primary'
          children={recipeCategory?.id ? 'Сохранить категорию' : 'Добавить категорию'}
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