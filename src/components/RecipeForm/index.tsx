'use client'

import { CreateRecipeDocument } from '@/gql/createRecipe'
import { UpdateRecipeDocument } from '@/gql/updateRecipe'
import { useEvent } from '@/hooks/useEvent'
import { useGetRecipeById } from '@/hooks/useGetRecipeById'
import { useMutation } from '@apollo/client'
import { Button, Form, notification } from 'antd'
import { useRouter } from 'next/navigation'
import { memo, useEffect } from 'react'
import { ContentCard } from '../Layout'
import { TabForm } from './TabForm'
import { recipeValidateFormVar } from '@/apollo/vars'

export const RecipeForm = memo(() => {
  const router = useRouter()
  const [form] = Form.useForm()
  const recipe = useGetRecipeById()
  const [action, { loading }] = useMutation(recipe?.id ? UpdateRecipeDocument : CreateRecipeDocument, {
    refetchQueries: ['getPost'],
    awaitRefetchQueries: true
  })

  const onFinish = useEvent(async recipe => {
    try {
      await action({
        variables: {
          recipe: {
            ...recipe,
            ingredients: JSON.stringify(recipe?.ingredients?.map((el: any) => ({ ingredientId: el.ingredientId, value: el.value, note: el.note })))
          }
        }
      })

      notification.success({
        message: 'Внимание',
        description: 'Пост успешно сохранен.',
        placement: 'topRight'
      })
      if (!recipe?.id) {
        router.push('/recipes')
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
    if (recipe && form) {
      form.setFieldsValue(recipe)
      form.setFieldValue('ingredients', recipe?.ingredients)
    }
  }, [recipe, form])

  return (
    <ContentCard
      title={recipe?.id ? 'Обновление рецепта' : 'Создание рецепта'}
      rightSection={(
        <Button
          loading={loading}
          disabled={loading}
          type='primary'
          children={recipe?.id ? 'Сохранить рецепт' : 'Добавить рецепт'}
          onClick={form.submit}
        />
      )}
    >
      <Form
        layout='vertical'
        form={form}
        requiredMark={false}
        onFinish={onFinish}
        onFinishFailed={({ errorFields }: { errorFields: any }) => recipeValidateFormVar(errorFields)}
        scrollToFirstError
      >
        <Form.Item name='id' noStyle />
        <TabForm />
      </Form>
    </ContentCard>
  )
})