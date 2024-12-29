import { IRenderFormItem } from '@/types/renderFormItem'
import { Input } from 'antd'
import { Ingredients } from '../Form/Ingredients'
import { Preview } from '../Form/Preview'
import { TextareaEditor } from '../Form/TextareaEditor'

export const MAIN_FIELDS: Array<IRenderFormItem> = [
  {
    label: 'Имя ингридиента',
    name: 'title',
    component: Input,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Введите текст...',
    }
  },
  {
    label: 'Описание',
    name: 'description',
    component: Input.TextArea,
    props: {
      placeholder: 'Введите описание...',
    }
  },
  {
    label: 'Родитель',
    name: 'parentId',
    component: Ingredients,
  },
  {
    label: 'Превью',
    name: 'previewId',
    component: Preview,
  },
  {
    label: 'Превью, alt',
    name: 'previewAlt',
    component: Input,
    props: {
      placeholder: 'Введите текст...',
    }
  },
  {
    label: 'Превью, title',
    name: 'previewTitle',
    component: Input,
    props: {
      placeholder: 'Введите текст...',
    }
  },
  {
    label: 'Иконка',
    name: 'iconId',
    component: Preview,
  },
]