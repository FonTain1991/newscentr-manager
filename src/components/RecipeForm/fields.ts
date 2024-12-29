import { IRenderFormItem } from '@/types/renderFormItem'
import { Input, Switch, TimePicker } from 'antd'
import { Url } from '../Form'
import { CategoryRecipeSelect } from '../Form/CategoryRecipeSelect'
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
    name: 'recipeCategoryId',
    component: CategoryRecipeSelect,
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

export const SETTING_FIELDS: Array<IRenderFormItem> = [
  {
    label: 'Активное время приготовления',
    name: 'activeCookingTime',
    component: TimePicker,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Выберите время...',
      format: 'HH:mm:ss',
      needConfirm: false,
      showNow: false
    }
  },
  {
    label: 'Общее время приготовления',
    name: 'totalCookingTime',
    component: TimePicker,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Выберите время...',
      format: 'HH:mm:ss',
      needConfirm: false,
      showNow: false
    }
  },
]