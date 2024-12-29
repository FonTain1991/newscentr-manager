import { IRenderFormItem } from '@/types/renderFormItem'
import { Input, Switch } from 'antd'
import { Url } from '../Form'
import { CategoryPostSelect } from '../Form/CategoryPostSelect'
import { Preview } from '../Form/Preview'
import { TextareaEditor } from '../Form/TextareaEditor'

export const MAIN_FIELDS: Array<IRenderFormItem> = [
  {
    label: 'Название страницы',
    name: 'pageName',
    component: Input,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Введите текст...',
    }
  },
  {
    label: 'Ссылка на страницу',
    name: 'url',
    component: Url,
    props: {
      urlDeps: 'pageName'
    }
  },
  {
    label: 'Тег <title></title>',
    name: 'pageTitle',
    component: Input,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Введите текст...',
    }
  },
  {
    label: 'Категория',
    name: 'postCategoryId',
    component: CategoryPostSelect,
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
    label: 'Описание',
    name: 'text',
    component: TextareaEditor,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Введите текст...',
    }
  },
  {
    label: 'Опубликовать',
    name: 'isPublish',
    component: Switch
  },
]

export const CEO_FIELDS: Array<IRenderFormItem> = [
  {
    label: 'Meta.Description',
    name: 'description',
    component: Input.TextArea,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Введите описание',
    }
  },
  {
    label: 'Meta.Keywords',
    name: 'keywords',
    component: Input.TextArea,
    props: {
      placeholder: 'Введите ключевые фразы...',
    }
  },
]