import { IRenderFormItem } from '@/types/renderFormItem'
import { Input } from 'antd'
import { Url } from '../Form'
import { CategoryPostSelect } from '../Form/CategoryPostSelect'
import { TextareaEditor } from '../Form/TextareaEditor'

export const MAIN_FIELDS: Array<IRenderFormItem> = [
  {
    label: 'Название категории',
    name: 'name',
    component: Input,
    rules: [
      { required: true, message: 'Обязательное поле' }
    ],
    props: {
      placeholder: 'Введите текст...',
    }
  },
  {
    label: 'Ссылка на категорию',
    name: 'url',
    component: Url,
    props: {
      urlDeps: 'name'
    }
  },
  {
    label: 'Родитель',
    name: 'parentId',
    component: CategoryPostSelect,
  },
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
  {
    label: 'Описание на странице',
    name: 'text',
    component: TextareaEditor,
    props: {
      placeholder: 'Введите ключевые фразы...',
    }
  },
]