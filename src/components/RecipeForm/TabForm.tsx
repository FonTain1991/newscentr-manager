import { Form, Tabs, TabsProps } from 'antd'
import { memo, useMemo } from 'react'
import { RecipeIngredient } from '../RecipeIngredient'
import { CeoInfo } from './CeoInfo'
import { MainInfo } from './MainInfo'
import { Settings } from './Settings'
import { useReactiveVar } from '@apollo/client'
import { recipeValidateFormVar } from '@/apollo/vars'
import { ExclamationCircleOutlined } from '@ant-design/icons'

export const TabForm = memo(() => {
  const recipeValidateForm = useReactiveVar<any>(recipeValidateFormVar)
  const items: TabsProps['items'] = useMemo(() => {
    const tabs = [
      {
        key: 'main',
        label: 'Основная информация',
        children: <MainInfo />,
        fields: ['pageName', 'pageTitle', 'text']
      },
      {
        key: 'ingredient',
        label: 'Ингредиенты',
        forceRender: true,
        children: (
          <Form.Item name='ingredients'>
            <RecipeIngredient />
          </Form.Item>
        )
      },
      {
        key: 'settings',
        label: 'Настройки',
        children: <Settings />,
        forceRender: true,
        fields: ['activeCookingTime', 'totalCookingTime']
      },
      {
        key: 'ceo',
        label: 'CEO',
        children: <CeoInfo />,
        forceRender: true,
        fields: ['description']
      },
      {
        key: 'statistics',
        label: 'Статистика',
        children: 'Здесь будет статистика',
        forceRender: true
      }
    ]

    return tabs.map(el => {
      if (!!recipeValidateForm?.find((v: any) => el?.fields?.includes(v.name[0]))) {
        return {
          ...el,
          label: (
            <div className='text-red-500 font-medium border border-red-300 px-2'>
              {el.label}
              {<ExclamationCircleOutlined className='ml-1' style={{ color: 'red' }} />}
            </div>
          )
        }
      }
      return el
    })
  }, [recipeValidateForm])

  return (
    <Tabs items={items} />
  )
})