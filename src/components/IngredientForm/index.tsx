'use client'

import { CreateIngredientDocument } from '@/gql/createIngredient'
import { UpdateIngredientDocument } from '@/gql/updateIngredient'
import { useEvent } from '@/hooks/useEvent'
import { useGetIngredientById } from '@/hooks/useGetIngredientById'
import { useMutation } from '@apollo/client'
import { Button, Form, notification } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useEffect } from 'react'
import { RenderFormItems } from '../Form/RenderFormItems'
import { ContentCard } from '../Layout'
import { MAIN_FIELDS } from './fields'

export const IngredientForm = memo(() => {
  const router = useRouter()
  const ingredient = useGetIngredientById()
  const [form] = Form.useForm()

  const [action, { loading }] = useMutation(ingredient?.id ? UpdateIngredientDocument : CreateIngredientDocument, {
    refetchQueries: ['getIngredients'],
    awaitRefetchQueries: true
  })


  const onFinish = useEvent(async ingredient => {
    try {
      await action({
        variables: {
          ingredient
        }
      })
      notification.success({
        message: 'Внимание',
        description: 'Ингредиент успешно сохранен',
        placement: 'topRight'
      })

      if (!ingredient?.id) {
        router.push('/ingredients')
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
    if (ingredient && form) {
      form.setFieldsValue(ingredient)
    }
  }, [ingredient, form])

  return (
    <ContentCard
      title={ingredient?.id ? 'Обновление ингредиента' : 'Создание ингредиента'}
      rightSection={(
        <Button
          loading={loading}
          disabled={loading}
          type='primary'
          children={ingredient?.id ? 'Сохранить ингредиент' : 'Добавить ингредиент'}
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