import { ListLocale } from 'antd/es/list'
import { TableLocale } from 'antd/es/table/interface'

// Перевод компоненты <Table/>
export const TABLE_LOCALE: TableLocale = {
  emptyText: 'Не найдено',
  triggerAsc: 'Сортировать по возрастанию',
  triggerDesc: 'Сортировать по убыванию',
  cancelSort: 'Отменить сортировку'
}

export const LIST_LOCALE: ListLocale = {
  emptyText: 'Не найдено'
}

// Сортировка
export const SORT = {
  ASCEND: 'asc',
  DESCEND: 'desc'
}

export const DEFAULT_LOCALE = 'ru'
export const LOCALES = [
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'Английский' }
]

export const FILE_MANAGER_TYPES = {
  FOLDER: 'FOLDER',
  IMAGE: 'IMAGE',
}

export const API_IMAGE_URL = '/api/images/'