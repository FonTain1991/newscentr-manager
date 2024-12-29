import { IRenderFormItem } from '@/types/renderFormItem'
import { Input } from 'antd'
import { Ingredients } from '../Form/Ingredients'
import { DeleteRow } from './DeleteRow'

export interface IRecipeIngredientItem {
  ingredientId: string
  value: string
  note?: string
}

export const MAIN_FIELDS: Array<IRenderFormItem> = [
  {
    label: 'Ингредиент',
    name: 'ingredientId',
    component: Ingredients,
    rules: [{ required: true, message: 'Обязательное поле' }],
    props: {
      placeholder: 'Введите данные...',
      style: {
        width: '100%',
        height: 32
      }
    }
  },
  {
    label: 'Значение',
    name: 'value',
    component: Input,
    props: {
      placeholder: 'Введите данные...',
      style: {
        width: '100%'
      }
    }
  },
  {
    label: 'Примечание',
    name: 'note',
    component: Input,
    props: {
      placeholder: 'Введите данные...',
      style: {
        width: '100%'
      }
    }
  },
  {
    label: '',
    component: DeleteRow
  }
]